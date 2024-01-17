import React from "react";
import Image from "next/image";

import styles from "styles/modules/ExecCard.module.scss";

// TODO: consider separating into component that's more generic, and having
// ExecCard inherit from that
const ExecCard = ({ data, colour }) => {
  const { name, image, description, role } = data;

  // TODO: fix description not showing
  return (
    <div className="col-md-4">
      <div className="card-person">
        <div className={`${styles["card-person-style" + colour]} limit`}>
          <div className={styles["card-person-animation"]} />
          <Image alt={name} src={image} className="card-img-top" />
          <div className={styles[`go-corner-style${colour}`]}>
            <div className={styles["go-arrow"]} />
          </div>
        </div>
      </div>
      <div className="card-body text-center pt-2 pb-4">
        <h4 className="about-name">{name}</h4>
        {role === "" ? null : <p className="about-role">{role}</p>}
        {/* {description === "" ? null : <p className={styles["person-text"]}>{description}</p>} */}
      </div>
    </div>
  );
};

export default ExecCard;
