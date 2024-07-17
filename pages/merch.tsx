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
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import Stripe from "stripe";
import {
  Product,
  Variant,
  Cart,
  ProductColour,
  ProductSize,
  CartItemWithDetail,
} from "data/types";
import { isMerchActive, getAllProductsAndVariants } from "scripts/merch";

type Repo = {
  products: Product[];
  variants: Variant[];
};

export const getServerSideProps = (async () => {
  if (!isMerchActive()) {
    return {
      props: {
        repo: { products: [], variants: [] },
      },
    };
  }

  // Ideally should be moved out to not initialise on every render
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const stripe: Stripe = require("stripe")(process.env["STRIPE_SECRET_KEY"]);
  const { products, variants } = await getAllProductsAndVariants(stripe);

  return {
    props: {
      repo: { products, variants },
    },
  };
}) satisfies GetServerSideProps<{ repo: Repo }>;

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

      <section className="section section-sm">
        <Row className="justify-content-around text-center">
          <Col lg="8">
            <h1 className="animate__animated animate__zoomIn animate__fast pb-4 mt-3 mt-sm-5">
              MERCH
            </h1>
          </Col>
        </Row>
        <Container className="container-md">
          {isMerchActive() ? (
            <>
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
              <Row className="mt-3 justify-content-center">
                <Button
                  disabled={cart.size === 0 || isCartLoading}
                  onClick={() => goToCart()}
                  className="bg-primary text-white"
                >
                  {isCartLoading && <Spinner size="sm">Loading...</Spinner>}
                  <span> View Cart</span>
                </Button>
              </Row>
            </>
          ) : (
            <Row className="justify-content-center text-center">
              <Col lg="10">
                <p className="lead text-muted">
                  Orders are now closed - check back next year for more merch!
                </p>
              </Col>
            </Row>
          )}
        </Container>
      </section>
    </>
  );
};

export default Merch;
