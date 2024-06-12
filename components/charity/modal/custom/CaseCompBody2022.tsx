import React from "react";
import { Row, Col } from "reactstrap";

import CharityBody from "../CharityBody";

import { CharityEventProps } from "../../../../data/types";

const CaseCompBody1 = ({ event }: CharityEventProps) => {
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

export default CaseCompBody1;
