import React from "react";
import { Row, Col } from "reactstrap";

import CharityBody from "../CharityBody";

import { CharityEvent } from "../../../../data/types";

interface CaseCompBodyProps {
  event: CharityEvent;
}

const CaseCompBody = ({ event }: CaseCompBodyProps) => {
  return (
    <>
      <CharityBody event={event} />
      <hr></hr>
      <Row className="text-center">
        <Col>
          <div className="verticalAlignTextDiv">
            <p>
              Congratulations to the winning team, JMP Consulting (Mridul Pant,
              Palaash Rawat, Jay Shah). Their strong emphasis on feasible
              recruitment strategies that target TLR’s ideal demographic,
              impressed our judges immensely. Well done!
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default CaseCompBody;
