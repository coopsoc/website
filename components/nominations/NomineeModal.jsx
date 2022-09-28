import Image from "next/image";
import React from "react";
import { Col, Modal, ModalHeader, ModalBody, Row } from "reactstrap";

const NomineeModal = ({ data, roles, isOpen, toggle }) => {
  return (
    <Modal className="modal-dialog-centered modal-lg" isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>{data.name}</ModalHeader>

      <ModalBody>
        <Row className="justify-content-center text-center">
          <Col md={6}>
            <Image
              alt={data.name}
              src={data.image} style={{
                width: "50%",
                padding: "20px 50px 20px 50px"
              }} />
          </Col>
        </Row>

        <Row className="justify-content-center text-center">
          <b>Running for:&nbsp; </b>{roles.join(", ")}
        </Row>

        <hr />

        <Row>
          {data.description !== undefined && data.description.split("\n").map(paragraph => (
            <>
              <p>{paragraph}</p>
              <br />
            </>
          ))}
        </Row>
      </ModalBody>
    </Modal>
  );
};

export default NomineeModal;
