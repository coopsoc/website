import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import {
  Button,
  Card,
  Carousel,
  CarouselControl,
  CarouselItem,
  Col,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  Spinner,
} from "reactstrap";
import "animate.css";
import { InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import {
  Cart,
  CartItemWithDetail,
  Price,
  Product,
  ProductColour,
  ProductSize,
  Variant,
  getAllPrices,
  getAllProductsAndVariants,
} from "scripts/merch";
import Stripe from "stripe";

type Repo = {
  products: Product[];
  variants: Variant[];
};

export const getServerSideProps = async () => {
  // Ideally should be moved out to not initialise on every render
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const stripe: Stripe = require("stripe")(process.env["STRIPE_SECRET_KEY"]);

  const { products, variants } = await getAllProductsAndVariants(stripe);
  const prices = await getAllPrices(stripe);

  products.forEach((product: Product) => {
    product.price =
      prices.find((price: Price) => price.id === product.price.id) ??
      product.price;
  });

  variants.forEach((variant: Variant) => {
    variant.price =
      prices.find((price: Price) => price.id === variant.price.id) ??
      variant.price;
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
  isInCart,
  findVariantID,
  findAllVariantsOfProduct,
}: {
  product: Product;
  setCart: React.Dispatch<React.SetStateAction<Cart>>;
  isInCart: (productName: string) => boolean;
  findVariantID: (
    productName: string,
    colour: ProductColour,
    size: ProductSize,
  ) => string | undefined;
  findAllVariantsOfProduct: (productName: string) => Variant[];
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
  const [errorMessage, setErrorMessage] = useState("");

  const toggleColourDropdown = () => setColourDropdownOpen(!colourDropdownOpen);
  const toggleSizeDropdown = () => setSizeDropdownOpen(!sizeDropdownOpen);
  const toggleQtyDropdown = () => setQtyDropdownOpen(!qtyDropdownOpen);

  const [carouselImages, setCarouselImages] = useState<string[]>([]);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [carouselAnimating, setCarouselAnimating] = useState(false);

  const carouselNext = () => {
    if (carouselAnimating) return;
    const nextIndex =
      carouselIndex === carouselImages.length - 1 ? 0 : carouselIndex + 1;
    setCarouselIndex(nextIndex);
  };

  const carouselPrevious = () => {
    if (carouselAnimating) return;
    const nextIndex =
      carouselIndex === 0 ? carouselImages.length - 1 : carouselIndex - 1;
    setCarouselIndex(nextIndex);
  };

  const getVariantID = () => {
    const variantID = findVariantID(product.name, colourChoice, sizeChoice);
    if (!variantID) {
      if (colourChoice === ProductColour.UNKNOWN) {
        setErrorMessage("Please select a colour.");
      } else if (sizeChoice === ProductSize.UNKNOWN) {
        setErrorMessage("Please select a size.");
      } else {
        setErrorMessage(
          "Sorry, looks like your colour and size is not available. Please try another combination.",
        );
      }

      return undefined;
    }

    return variantID;
  };

  const addToCart = () => {
    const variantID = getVariantID();
    if (!variantID) return;

    if (qtyChoice === 0) {
      setErrorMessage("Please select a quantity.");
      return;
    }

    setCart((prevCart) => {
      const newCart = new Map(prevCart); // must clone the map to correctly set state
      newCart.forEach((_, key) => {
        if (key.split("-")[0] === variantID.split("-")[0]) {
          newCart.delete(key);
        }
      });
      newCart.set(variantID, qtyChoice);
      return newCart;
    });
    setErrorMessage("");
  };

  const removeFromCart = () => {
    const variantID = getVariantID();
    if (!variantID) return;

    setCart((prevCart) => {
      prevCart.delete(variantID);
      return prevCart;
    });
    setQtyChoice(0);
    setErrorMessage("");
  };

  useEffect(() => {
    const imageURLs = findAllVariantsOfProduct(product.name)
      .flatMap((variant) => variant.imageURLs)
      .map((url) => url.replace(".png", ".jpg"));
    console.log(imageURLs);
    const dedupedImageURLs = imageURLs.filter(
      (value, index) => imageURLs.indexOf(value) === index,
    );

    setCarouselImages(dedupedImageURLs);
  }, []);

  const displayAllVariantImages = () => {
    return carouselImages.map((url) => {
      const path = url.replace("https%3A//www.coopsoc.com.au", "");
      return (
        <CarouselItem
          onExiting={() => setCarouselAnimating(true)}
          onExited={() => setCarouselAnimating(false)}
          key={path.split("/").at(-1)}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              paddingTop: "100%",
            }}
          >
            <Image
              src={path}
              alt={path.split("/").at(-1) ?? "merch item"}
              layout="fill"
              sizes="(max-width 575px) 100vw, (max-width: 767px) 33vw, 25vw"
              quality="40"
            />
          </div>
        </CarouselItem>
      );
    });
  };

  return (
    <Card className="m-3">
      <Carousel
        activeIndex={carouselIndex}
        next={carouselNext}
        previous={carouselPrevious}
        dark
      >
        {displayAllVariantImages()}
        <CarouselControl direction="prev" onClickHandler={carouselPrevious} />
        <CarouselControl direction="next" onClickHandler={carouselNext} />
      </Carousel>
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
            // disabled={qtyBtnDisabled}
          >
            <DropdownToggle caret>
              {qtyChoice === 0 ? "Qty" : qtyChoice}
            </DropdownToggle>
            <DropdownMenu>
              {[1, 2, 3, 4, 5].map((qty) => (
                <DropdownItem key={qty} onClick={() => setQtyChoice(qty)}>
                  {qty}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </Row>
        <Row className="p-3">
          <Button className="m-1 bg-green" onClick={() => addToCart()}>
            {isInCart(product.name) ? "Update cart" : "Add to cart"}
          </Button>
          {isInCart(product.name) && (
            <Button
              className="m-1 bg-warning text-white"
              onClick={() => removeFromCart()}
            >
              Remove from cart
            </Button>
          )}
        </Row>
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <p style={{ color: "#ba3232" }}>{errorMessage}</p>
        </Container>
      </Container>
    </Card>
  );
};

const Merch = ({
  repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const [cart, setCart] = useState<Cart>(new Map());
  const [isCartLoading, setIsCartLoading] = useState(false);

  useEffect(() => {
    const existingCart = localStorage.getItem("cart");
    if (existingCart != null) {
      const JSONCart = JSON.parse(existingCart);
      const newCart = new Map();
      JSONCart.map((obj: CartItemWithDetail) => {
        newCart.set(obj.product.id, obj.qty);
      });
      setCart(newCart);
    }
  }, []);

  const findVariantID = (
    productName: string,
    colour?: ProductColour,
    size?: ProductSize,
  ) => {
    return repo.variants.find(
      (variant) =>
        variant.productName.includes(productName) &&
        variant.colour === colour &&
        variant.size === size,
    )?.id;
  };

  const findAllVariantsOfProduct = (productName: string) => {
    return repo.variants.filter((variant) =>
      variant.productName.includes(productName),
    );
  };

  const isInCart = (productName: string) => {
    const variantID = repo.variants.find((variant) =>
      variant.productName.includes(productName),
    )?.id;
    if (!variantID) return false;

    return [...cart.keys()].some(
      (key) => key.split("-")[0] === variantID.split("-")[0],
    );
  };

  const goToCart = () => {
    setIsCartLoading(true);

    const cartWithDetails: CartItemWithDetail[] = [];

    cart.forEach((qty, variantID) => {
      const variant = repo.variants.find((variant) => variant.id === variantID);
      if (!variant) return;

      const product = repo.products.find((product) =>
        variant.productName.includes(product.name),
      );
      if (!product) return;

      cartWithDetails.push({
        product: {
          id: variant.id,
          name: variant.productName,
          images: variant.imageURLs,
        },
        price: variant.price,
        qty,
      });
    });

    localStorage.setItem("cart", JSON.stringify(cartWithDetails));
    setIsCartLoading(false);
    router.push({ pathname: "/cart" });
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
        <Container className="container-md">
          <Row className="justify-content-center">
            {repo.products.map((product) => (
              <Col className="col-sm-5" key={product.name}>
                <MerchCard
                  product={product}
                  setCart={setCart}
                  isInCart={isInCart}
                  findVariantID={findVariantID}
                  findAllVariantsOfProduct={findAllVariantsOfProduct}
                />
              </Col>
            ))}
          </Row>
        </Container>
        <Container>
          <Row className="mt-2 justify-content-center">
            <Button
              disabled={cart.size === 0 || isCartLoading}
              onClick={() => goToCart()}
              className="bg-primary text-white"
            >
              {isCartLoading && <Spinner size="sm">Loading...</Spinner>}
              <span> View Cart</span>
            </Button>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Merch;
