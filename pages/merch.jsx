import React, { useState, useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import CheckoutForm from "components/merch/CheckoutForm";

const MerchCollection = dynamic(() => import("components/merch/MerchCollection"));

import { Modal, ModalBody } from "reactstrap";
import MerchHeader from "components/merch/MerchHeader";

export async function getStaticProps () {
  const products = await fetch("https://api.coopsoc.com.au/products");
  const _data = await products.json();
 
	return {
    props: {
      _data,
    },
  }
}

const Merch = (props) => {
	const { _data } = props;
	const [ modal, setModal ] = useState();
	const [ cart, setCart ] = useState([]);

	const toggle = () => {
		setModal(!modal);
	}
	
	const updateCart = (value) => {
		setCart(value);
	}

	const addToCart = (value) => {
		let _cart = JSON.parse(JSON.stringify(cart));
		_cart.push(value);
		setCart(_cart);
	}


	return (
		<>
      		<Head>
        			<title>Merch | UNSW Co-op Society</title>	
     			</Head>
					<div className="container">
						<MerchHeader click={toggle}/>
						<MerchCollection _data={_data} addToCart={addToCart}/>
						<Modal isOpen={modal} toggle={toggle} size="lg">
							<ModalBody>
								<CheckoutForm cart={cart} updateCart={updateCart}/>
							</ModalBody>
						</Modal>	
					</div>	
			</>
		);
	};

export default Merch;
