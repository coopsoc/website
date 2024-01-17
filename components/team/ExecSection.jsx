import React from "react";
import { Row } from "reactstrap";

import ExecCard from "./ExecCard.jsx";

const seededRandom = (s) => {
  let hash = 0;
  if (s.length === 0) return hash;

  for (let i = 0; i < s.length; i++) {
    const chr = s.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }

  return hash;
};

const ExecSection = ({ section }) => {
  const colour = (Math.abs(seededRandom(section.sectionName)) % 5) + 1;

  return (
    <>
      <hr />
      <Row className="justify-content-center text-center mb-3 mb-sm-4 mb-md-5">
        <h2>{section.sectionName}</h2>
      </Row>
      {section.members.map((row, rowIndex) => (
        <div key={`exec-row${rowIndex}`} className="row justify-content-center">
          {row.map((member, index) => (
            <ExecCard
              key={`exec-card${rowIndex}-${index}`}
              data={member}
              colour={colour}
            />
          ))}
        </div>
      ))}
    </>
  );
};

export default ExecSection;
