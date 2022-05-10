import React from "react";
import Image from "next/image";

const CharityBody = ({ event }) => {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <Image
          src={event.image}
          alt={event.title}
          style={{ width: "50%" }} />
      </div>
      <hr />
      {event.description.split("\n").map(line => <p>{line}</p>)}
    </>
  );
}

export default CharityBody;
