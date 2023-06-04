import React, { useRef, useState } from "react";
import Head from "next/head";
import CheckoutForm from "components/merch/CheckoutForm";
import MerchCollection from "components/merch/MerchCollection";

import { Modal, ModalBody } from "reactstrap";
import MerchHeader from "components/merch/MerchHeader";

function handleGet (key) {
  if (typeof window !== 'undefined' && window.sessionStorage) {
    return JSON.parse(sessionStorage.getItem(key));
  }
}

const Merch = () => {
	const [ modal, setModal ] = useState();
	const [ cart, setCart ] = useState([]);

	const toggle = () => {
		setCart(handleGet("cart") ?? []);
		setModal(!modal);
	}
	
	const updateCart = (value) => {
		setCart(value);
	}

	return (
		<>
      		<Head>
        			<title>Merch | UNSW Co-op Society</title>
     			</Head>
					<div className="container">
						<MerchHeader click={toggle}/>
						<MerchCollection/>
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
