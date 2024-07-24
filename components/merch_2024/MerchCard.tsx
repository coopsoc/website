import React, { useEffect, useState } from "react";
import Image from "next/legacy/image";

import {
  Cart,
  Product,
  ProductColour,
  ProductSize,
  Variant,
} from "../../data/types";
import {
  CarouselItem,
  Card,
  Carousel,
  CarouselControl,
  Container,
  Row,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";

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

  const displayPrice = (cents: number | undefined) => {
    if (!cents) return "Price not available.";
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "AUD",
    });
    return formatter.format((cents * 1.0) / 100);
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
              // By default, quality = 75 (ranges from 0-100). For now, just converted PNG -> JPEG instead
              // quality="40"
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
        <Row className="gap-3 my-2 my-md-3">
          <Dropdown
            direction="down"
            isOpen={colourDropdownOpen}
            toggle={toggleColourDropdown}
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
        <Row className="p-2 d-flex justify-content-center align-items-center flex-col">
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
        {errorMessage && (
          <Row style={{ textAlign: "center" }}>
            <p style={{ color: "#ba3232" }}>{errorMessage}</p>
          </Row>
        )}
      </Container>
    </Card>
  );
};

export default MerchCard;
