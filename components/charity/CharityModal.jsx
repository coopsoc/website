import React from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap";

import CharityBody from "./modal/CharityBody.jsx";
import CaseCompBody from "./modal/custom/CaseCompBody.jsx";
import CaseCompBody1 from "./modal/custom/CaseCompBody2022.jsx";

const CharityModal = ({ isOpen, toggle, event }) => {
  // Renders the body of our modal. If there's anything in the `special`
  // key of our event object, we render a special object with any new items
  // attached (extra images, extra text etc.)
  const chooseBody = (special) => {
    switch (special) {
      case "casecomp":
        return <CaseCompBody event={event} />;
      case "casecomp22":
        return <CaseCompBody1 event={event} />;
      default:
        return <CharityBody event={event} />;
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
      className="modal-dialog-centered modal-lg"
    >
      <ModalHeader toggle={toggle}>{event.title}</ModalHeader>
      <ModalBody>{chooseBody(event.special)}</ModalBody>
      <ModalFooter>
        <a href={event.link}>
          <Button color="index" style={{ minWidth: "100px" }} onClick={toggle}>
            Visit
          </Button>
        </a>
        <Button
          color="secondary"
          style={{ minWidth: "100px" }}
          onClick={toggle}
        >
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CharityModal;
