import React, { forwardRef, Ref } from "react";
import { CardBody, CardBodyProps } from "reactstrap";

const NextCardBody = forwardRef(
  (props: CardBodyProps, ref: Ref<HTMLDivElement>) => {
    return (
      <div ref={ref}>
        <CardBody {...props}>{props.children}</CardBody>
      </div>
    );
  },
);
NextCardBody.displayName = "NextCardBody";

export default NextCardBody;
