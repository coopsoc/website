import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Card, Col, Container, Row } from "reactstrap";
import "animate.css";
import { InferGetServerSidePropsType } from "next";

type Repo = {
  products: any;
};

enum ProductColour {
  UNKNOWN,
  BLACK,
  CREAM,
  POWDER,
  GREY,
  PINE,
  NAVY,
}

enum ProductSize {
  UNKNOWN,
  S,
  M,
  L,
  XL,
}

type Product = {
  id: string;
  name: string;
  description: string;
  colour: ProductColour;
  size: ProductSize;
  price: Price;
  imageURLs: string[];
};

type Price = {
  id: string;
  cents: number;
};

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

const getAllProducts = async (stripe: any) => {
  const allProducts: Product[] = [];
  let listProductsResp = await stripe.products.list();
  let hasMore = true;

  while (hasMore) {
    const products: Product[] = listProductsResp.data.map((product: any) => {
      const productColourMatch = product.name.match(/\((.*?)\)/);
      let productColour = "";
      if (productColourMatch) {
        productColour = productColourMatch[1].toLowerCase();
      }

      const productSizeMatch = product.name.split(" ").at(-1);
      let productSize = "";
      if (productSizeMatch) {
        productSize = productSizeMatch.toUpperCase();
      }

      return {
        id: product.id,
        name: product.name,
        description: product.description,
        colour: toProductColourMap.get(productColour) ?? ProductColour.UNKNOWN,
        size: toProductSizeMap.get(productSize) ?? ProductSize.UNKNOWN,
        price: { id: product.default_price },
        images: product.images,
      };
    });
    allProducts.push(...products);

    listProductsResp = await stripe.products.list({
      starting_after:
        listProductsResp.data[listProductsResp.data.length - 1].id,
    });

    hasMore = listProductsResp.has_more;
  }

  return allProducts;
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

  const products = await getAllProducts(stripe);
  const prices = await getAllPrices(stripe);

  products.forEach((product: Product) => {
    product.price =
      prices.find((price: Price) => price.id === product.price.id) ??
      product.price;
  });

  console.log(products);
  const repo: Repo = { products };
  return { props: { repo } };
};

const MerchCard = () => {
  return (
    <Card color="warning">
      <Image
        src="https://picsum.photos/300/200"
        width={500}
        height={500}
        alt="merch1"
      />
      <p>Hello</p>
    </Card>
  );
};

const Merch = ({
  repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>Merch | UNSW Co-op Society</title>
      </Head>

      <section className="section section-lg">
        <Row className="justify-content-center text-center ">
          <Col lg="8">
            <h1 className="animate__animated animate__zoomIn animate__fast">
              MERCH
            </h1>
          </Col>
        </Row>

        <Container>
          <Row xs="100%">
            <Col xs="5">
              <MerchCard />
            </Col>
            <Col xs="5">
              <MerchCard />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Merch;
