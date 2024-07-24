import {
  Product,
  Variant,
  toProductColourMap,
  ProductColour,
  toProductSizeMap,
  ProductSize,
  Price,
} from "data/types";
import Stripe from "stripe";

//! Change to toggle on/off merch
export const isMerchActive = (): boolean => false;

//! Results in hydration errors but would be clean:
// export const isMerchActive = () =>
//   "NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY" in process.env &&
//   "STRIPE_SECRET_KEY" in process.env;

export const getAllProductsAndVariants = async (stripe: Stripe) => {
  const allProducts: Product[] = [];
  const allVariants: Variant[] = [];
  const allPrices: Map<string, Price> = await getAllPrices(stripe);

  let listProductsResp = await stripe.products.list({
    limit: 100,
    active: true,
  });
  let hasMore = true;

  while (hasMore) {
    listProductsResp.data.forEach((variant: Stripe.Product) => {
      const variantColourMatch = variant.name.match(/\((.*?)\)/);
      let variantColour = "";
      if (variantColourMatch) {
        variantColour = variantColourMatch[1].toLowerCase();
      }

      const variantSizeMatch = variant.name.split(" ").at(-1);
      let variantSize = "";
      if (variantSizeMatch) {
        variantSize = variantSizeMatch.toUpperCase();
      }

      const priceId = variant.default_price?.toString() ?? "";
      const price = allPrices.get(priceId) ?? { id: "", cents: 0 };

      const productName = variant.name.split("(").at(0)?.trim();
      const product = allProducts.find(
        (product) => product.name === productName,
      );
      if (product) {
        const colour =
          toProductColourMap.get(variantColour) ?? ProductColour.UNKNOWN;
        const size = toProductSizeMap.get(variantSize) ?? ProductSize.UNKNOWN;
        if (product.colours.indexOf(colour) === -1) {
          product.colours.push(colour);
        }
        if (product.sizes.indexOf(size) === -1) {
          product.sizes.push(size);
        }
      } else {
        allProducts.push({
          name: productName ?? "",
          description: variant.description ?? "",
          price,
          colours: [],
          sizes: [],
        });
      }

      allVariants.push({
        productName: variant.name,
        colour: toProductColourMap.get(variantColour) ?? ProductColour.UNKNOWN,
        size: toProductSizeMap.get(variantSize) ?? ProductSize.UNKNOWN,
        id: variant.id,
        imageURLs: variant.images,
        price,
      });
    });

    listProductsResp = await stripe.products.list({
      limit: 100,
      starting_after:
        listProductsResp.data[listProductsResp.data.length - 1].id,
    });

    hasMore = listProductsResp.has_more;
  }

  return { products: allProducts, variants: allVariants };
};

const getAllPrices = async (stripe: Stripe) => {
  // key: price id, value: Price (price id, cents) - for efficient lookup
  const allPrices: Map<string, Price> = new Map();

  // Auto-pagination: https://docs.stripe.com/api/pagination/auto?lang=node
  for await (const price of stripe.prices.list({ limit: 100 })) {
    allPrices.set(price.id, {
      id: price.id,
      cents: price.unit_amount ?? 0,
    });
  }

  return allPrices;
};
