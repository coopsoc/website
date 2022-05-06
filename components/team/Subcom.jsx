import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Subcom = ({ portfolio }) => {
  return (
    <>
      <div className="row">
        <div className="col-sm-8">
          {portfolio.icons.map((icon, index) => (
            <FontAwesomeIcon
              key={`subcom-icon-${portfolio.name}-${index}`}
              icon={icon} size="4x" className="m-2" />
          ))}
          <div className="card-body text-center">
            <h4 className="about-name">{portfolio.name}</h4>
            <p className="card-text subcom-desc">{portfolio.description}</p>
          </div>
        </div>
        <div className="col-sm-4 d-flex align-items-center">
          <div className="card-body text-center">
            <ul className="list-group">
              {portfolio.members.map((name, index) => (
                <li
                  key={`subcom-name-${name}-${index}`}
                  className="list-group-item border-0 li-name">
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
