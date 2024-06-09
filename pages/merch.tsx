import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import {
  Card,
  Col,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
} from "reactstrap";
import "animate.css";
import { InferGetServerSidePropsType } from "next";

type Repo = {
  products: Product[];
  variants: Variant[];
};

enum ProductColour {
  UNKNOWN = "Unknown",
  BLACK = "Black",
  CREAM = "Cream",
  POWDER = "Powder",
  GREY = "Grey",
  PINE = "Pine",
  NAVY = "Navy",
}

enum ProductSize {
  UNKNOWN = "Unknown",
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
}

// store of all product categories
type Product = {
  name: string;
  description: string;
  price: Price;
  colours: ProductColour[];
  sizes: ProductSize[];
};

// store of all product variants returned from Stripe
// Use categoryName + colour + size as composite key
type Variant = {
  productName: string;
  colour: ProductColour;
  size: ProductSize;

  id: string;
  imageURLs: string[];
};

type Price = {
  id: string;
  cents?: number;
};

type Cart = Map<string, number>;

const toProductColourMap: Map<string, ProductColour> = new Map([
  ["black", ProductColour.BLACK],
  ["cream", ProductColour.CREAM],
  ["powder", ProductColour.POWDER],
  ["grey", ProductColour.GREY],
  ["pine", ProductColour.PINE],
  ["navy", ProductColour.NAVY],
]);

const toProductSizeMap: Map<string, ProductSize> = new Map([
  ["S", ProductSize.S],
  ["M", ProductSize.M],
  ["L", ProductSize.L],
  ["XL", ProductSize.XL],
]);

const getAllProductsAndVariants = async (stripe: any) => {
  const allProducts: Product[] = [];
  const allVariants: Variant[] = [];
  let listProductsResp = await stripe.products.list({ limit: 100 });
  let hasMore = true;

  while (hasMore) {
    listProductsResp.data.forEach((variant: any) => {
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

      const productName = variant.name.split("(").at(0).trim();
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
          name: productName,
          description: variant.description,
          price: { id: variant.default_price },
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

const getAllPrices = async (stripe: any) => {
  const allPrices: Price[] = [];
  let listPricesResp = await stripe.prices.list();
  let hasMore = true;

  while (hasMore) {
    const prices: Price[] = listPricesResp.data.map((price: any) => {
      return {
        id: price.id,
        cents: price.unit_amount,
      };
    });
    allPrices.push(...prices);

    listPricesResp = await stripe.prices.list({
      starting_after: listPricesResp.data[listPricesResp.data.length - 1].id,
    });

    hasMore = listPricesResp.has_more;
  }

  return allPrices;
};

export const getServerSideProps = async () => {
  // Ideally should be moved out to not initialise on every render
  const stripe = require("stripe")(process.env["STRIPE_TEST_KEY"]);

  const { products, variants } = await getAllProductsAndVariants(stripe);
  const prices = await getAllPrices(stripe);

  products.forEach((product: Product) => {
    product.price =
      prices.find((price: Price) => price.id === product.price.id) ??
      product.price;
  });

  const repo: Repo = { products, variants };
  return { props: { repo } };
};

const displayPrice = (cents: number | undefined) => {
  if (!cents) return "Price not available.";
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "AUD",
  });
  return formatter.format((cents * 1.0) / 100);
};

const MerchCard = ({
  product,
  setCart,
  getVariantID,
}: {
  product: Product;
  setCart: React.Dispatch<React.SetStateAction<Cart>>;
  getVariantID: (
    productName: string,
    colour: ProductColour,
    size: ProductSize,
  ) => string | undefined;
}) => {
  const [colourChoice, setColourChoice] = useState<ProductColour>(
    ProductColour.UNKNOWN,
  );
  const [colourDropdownOpen, setColourDropdownOpen] = useState(false);
  const [sizeChoice, setSizeChoice] = useState<ProductSize>(
    ProductSize.UNKNOWN,
  );
  const [sizeDropdownOpen, setSizeDropdownOpen] = useState(false);
  const [qtyChoice, setQtyChoice] = useState(0);
  const [qtyDropdownOpen, setQtyDropdownOpen] = useState(false);

  const toggleColourDropdown = () => setColourDropdownOpen(!colourDropdownOpen);
  const toggleSizeDropdown = () => setSizeDropdownOpen(!sizeDropdownOpen);
  const toggleQtyDropdown = () => setQtyDropdownOpen(!qtyDropdownOpen);

  const updateCart = (qty: number) => {
    const variantID = getVariantID(product.name, colourChoice, sizeChoice);
    if (!variantID) return;
    setCart((prevCart) => {
      prevCart.set(variantID, qty);
      return prevCart;
    });
    setQtyChoice(qty);
  };

  return (
    <Card className="m-3">
      <Image
        src="https://picsum.photos/300/200"
        width={500}
        height={500}
        alt="merch1"
      />
      <Container className="p-3">
        <h3>{product.name}</h3>
        <p>{displayPrice(product.price.cents)}</p>
        <p>{product.description}</p>
        <Row className="p-3">
          <Dropdown
            direction="down"
            isOpen={colourDropdownOpen}
            toggle={toggleColourDropdown}
            className="m-1"
          >
            <DropdownToggle caret>
              {colourChoice === ProductColour.UNKNOWN ? "Colour" : colourChoice}
            </DropdownToggle>
            <DropdownMenu>
              {colourChoice !== ProductColour.UNKNOWN && (
                <DropdownItem
                  key={ProductColour.UNKNOWN}
                  onClick={() => setColourChoice(ProductColour.UNKNOWN)}
                >
                  Unselect colour
                </DropdownItem>
              )}
              {product.colours.map((colour) => (
                <DropdownItem
                  key={colour}
                  onClick={() => setColourChoice(colour)}
                >
                  {colour}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <Dropdown
            direction="down"
            isOpen={sizeDropdownOpen}
            toggle={toggleSizeDropdown}
            className="m-1"
          >
            <DropdownToggle caret>
              {sizeChoice === ProductSize.UNKNOWN ? "Size" : sizeChoice}
            </DropdownToggle>
            <DropdownMenu>
              {sizeChoice !== ProductSize.UNKNOWN && (
                <DropdownItem
                  key={ProductSize.UNKNOWN}
                  onClick={() => setSizeChoice(ProductSize.UNKNOWN)}
                >
                  Unselect size
                </DropdownItem>
              )}
              {product.sizes.map((size) => (
                <DropdownItem key={size} onClick={() => setSizeChoice(size)}>
                  {size}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <Dropdown
            isOpen={qtyDropdownOpen}
            toggle={toggleQtyDropdown}
            className="m-1"
          >
            <DropdownToggle caret>
              {qtyChoice === 0 ? "Qty" : qtyChoice}
            </DropdownToggle>
            <DropdownMenu>
              {[0, 1, 2, 3, 4, 5].map((qty) => (
                <DropdownItem key={qty} onClick={() => updateCart(qty)}>
                  {qty}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </Row>
      </Container>
    </Card>
  );
};

const Merch = ({
  repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [cart, setCart] = useState<Cart>(new Map());

  const getVariantID = (
    productName: string,
    colour: ProductColour,
    size: ProductSize,
  ) => {
    return repo.variants.find(
      (variant) =>
        variant.productName.includes(productName) &&
        variant.colour === colour &&
        variant.size === size,
    )?.id;
  };

  return (
    <>
      <Head>
        <title>Merch | UNSW Co-op Society</title>
      </Head>

      <section className="section section-lg">
        <Row className="justify-content-center text-center">
          <Col lg="8">
            <h1 className="animate__animated animate__zoomIn animate__fast">
              MERCH
            </h1>
          </Col>
        </Row>

        <Container>
          <Row className="justify-content-center">
            {repo.products.map((product) => (
              <Col xs="5" key={product.name}>
                <MerchCard
                  product={product}
                  setCart={setCart}
                  getVariantID={getVariantID}
                />
              </Col>
            ))}
          </Row>
        </Container>

        <button>Proceed to checkout</button>
      </section>
    </>
  );
};

export default Merch;
