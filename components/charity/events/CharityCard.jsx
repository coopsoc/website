import React from "react";
import Image from "next/image";

const CharityCard = ({ event, onClick }) => {
  return (
    <div className="col-md-4 col-lg-6 mb-4 mb-lg-4 charity-event">
      <Image
        src={event["image"]}
        alt={event["title"]}
        className="card-img-top"
        onClick={onClick} />
    </div>
  );
}

export default CharityCard;
