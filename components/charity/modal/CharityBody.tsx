import React from "react";
import Image from "next/image";
import { CharityEventProps } from "../../../data/types";

const CharityBody = ({ event }: CharityEventProps) => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Image src={event.image} alt={event.title} style={{ width: "50%" }} />
      </div>
      <hr />
      {event.description
        ?.split("\n")
        .map((line, index) => <p key={index}>{line}</p>)}
    </>
  );
};

export default CharityBody;
