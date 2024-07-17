import React, { useState } from "react";
import { Modal, ModalBody } from "reactstrap";
import Image from "next/legacy/image";

import styles from "styles/modules/Merch.module.scss";
import { Product2023 } from "../../data/types";

interface MerchCardProps {
  productData: Product2023;
  addToCart: (value: Product2023) => void;
}

const MerchCard = ({ productData, addToCart }: MerchCardProps) => {
  const [modal, setModal] = useState<boolean>(false);
  const [size, setSize] = useState<string>("S");
  const { name, id, images, price } = productData;
  const [source] = useState(images ? images[0] : "");

  const toggle = () => setModal(!modal);

  const onChange = (value: string) => {
    setSize(value);
  };

  const _addToCart = () => {
    const value = { id: id, name: name, price: price, size: size };
    addToCart(value);
    setModal(false);
  };

  return (
    <div className="col md-4">
      <div
        className="card text-center p-2 border-0 merch-card"
        key={id}
        onClick={toggle}
      >
        <Image
          className="card-img-top"
          src={images ? images[0] : ""}
          alt={name}
        />
        <div className="card-body pt-3">
          <h5 className="card-title mb-3">{name}</h5>
          <h5 className="card-subtitle text-muted">
            ${(price / 100).toFixed(2)}
          </h5>
        </div>
      </div>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className={styles[`merch-modal`]}
        size="lg"
      >
        <ModalBody>
          <div className="row d-flex justify-content-center">
            <div className="col-md-10">
              <div className="card">
                <div className="row">
                  <div className="col-md-6">
                    <div className="images p-3">
                      <div className="text-center p-4">
                        {" "}
                        <Image
                          id="main-image"
                          src={source}
                          width="250"
                          alt={`Main image of ${name}`}
                        />{" "}
                      </div>
                      {/* <div className="thumbnail text-center">
                          {images.map((src, index) => {
                            return (
                              <Image key={index} onClick={() => changeImage(index)} src={src} width="70"/>
                            );
                          })}
                        </div> */}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="product p-4">
                      <div className="mt-4 mb-3">
                        {" "}
                        <span className="text-uppercase text-muted brand">
                          Orianz
                        </span>
                        <h5 className="text-uppercase">{name}</h5>
                        <div className="price d-flex flex-row align-items-center">
                          <span className="act-price">
                            ${(price / 100).toFixed(2)}
                          </span>
                        </div>
                        <div className="sizes mt-5">
                          <h6 className="text-uppercase">Size</h6>{" "}
                          <label className={"radio " + styles[`size-button`]}>
                            {" "}
                            <input
                              type="radio"
                              name="size"
                              value="S"
                              onChange={() => onChange("S")}
                              defaultChecked
                            />{" "}
                            <span>S</span>{" "}
                          </label>{" "}
                          <label className={"radio " + styles[`size-button`]}>
                            {" "}
                            <input
                              type="radio"
                              name="size"
                              value="M"
                              onChange={() => onChange("M")}
                            />{" "}
                            <span>M</span>{" "}
                          </label>{" "}
                          <label className={"radio " + styles[`size-button`]}>
                            {" "}
                            <input
                              type="radio"
                              name="size"
                              value="L"
                              onChange={() => onChange("L")}
                            />{" "}
                            <span>L</span>{" "}
                          </label>{" "}
                          <label className={"radio " + styles[`size-button`]}>
                            {" "}
                            <input
                              type="radio"
                              name="size"
                              value="XL"
                              onChange={() => onChange("XL")}
                            />{" "}
                            <span>XL</span>{" "}
                          </label>{" "}
                          <label className={"radio " + styles[`size-button`]}>
                            {" "}
                            <input
                              type="radio"
                              name="size"
                              value="XXL"
                              onChange={() => onChange("XXL")}
                            />{" "}
                            <span>XXL</span>{" "}
                          </label>
                        </div>
                        <div className="cart mt-4 align-items-center">
                          {" "}
                          <button
                            className="btn btn-primary text-uppercase me-2 px-4"
                            onClick={_addToCart}
                          >
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default MerchCard;
