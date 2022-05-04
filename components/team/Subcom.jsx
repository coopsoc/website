import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Subcom = ({ data }) => {
  const n_icons = data["icon"].length;

  return (
    <>
      <br />
      <div className="row">
        <div className="col-sm-8">
          {data["icon"].map((icon, index) => {
            if (index === n_icons - 1) {
              return <FontAwesomeIcon key={index} icon={icon} size="4x" />;
            } else {
              return <FontAwesomeIcon key={index} icon={icon} size="4x" style={{ margin: "10px" }} />;
            }
          })}
          <div className="card-body text-center">
            <h4 className="about-name">{data["name"]}</h4>
            <p className="card-text subcom-desc">{data["description"]}</p>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card-body text-center">
            <ul className="list-group">
              <br></br>
              {data["name"] === "Marketing" ? <></> : data["name"] === "Publications/IT" ? <div><br></br> <br></br></div> : <br></br>}
              {data["members"].map((name, index) => (
                <li key={index} className="list-group-item border-0 li-name">{name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subcom;
