import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SubcomSection } from "../../data/types";

interface SubcomProps {
  portfolio: SubcomSection;
}

const Subcom = ({ portfolio }: SubcomProps) => {
  return (
    <>
      <div className="row d-flex align-items-center">
        <div className="col-md-8">
          {portfolio.icons.map((icon, index) => (
            <FontAwesomeIcon
              key={`subcom-icon-${portfolio.name}-${index}`}
              icon={icon}
              size="4x"
              className="m-2"
            />
          ))}
          <div className="card-body text-center pb-0 pb-md-3">
            <h4 className="about-name">{portfolio.name}</h4>
            <p className="card-text subcom-desc">{portfolio.description}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card-body text-center">
            <ul className="list-group">
              {portfolio.members.map((name, index) => (
                <li
                  key={`subcom-name-${name}-${index}`}
                  className="list-group-item border-0 li-name"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subcom;
