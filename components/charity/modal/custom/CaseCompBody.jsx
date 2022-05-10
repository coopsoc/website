import React from "react";
import Image from "next/image";
import { Row, Col } from "reactstrap";

import CharityBody from "../CharityBody.jsx";

import caseCompWinners from 'assets/img/charity/case-comp2021Winners.jpg';

const CaseCompBody = ({ event }) => {
  return (
    <>
      <CharityBody event={event} />
      <hr></hr>
      <Row className="text-center">
        <Col>
          <div className='verticalAlignTextDiv'>
            <p>Congratulations to our winning team, Ignite Consulting, for their incredible solution. Well done Annie Yan, Nicole Huang, Jerry Yeh and Ethan Wong!</p>
          </div>
        </Col>
        <Col>
          <Image
            src={caseCompWinners}
            alt={event.title}
            style={{ width: "100%" }} />
        </Col>
      </Row>
    </>
  );
}

export default CaseCompBody;
