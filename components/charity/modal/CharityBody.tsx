import React from "react";
import Image from "next/image";
import { CharityEvent } from "data/types";

interface CharityBodyProps {
  event: CharityEvent;
}

const CharityBody = ({ event }: CharityBodyProps) => {
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
