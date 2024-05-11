import React, { forwardRef, Ref } from "react";
import { CardBody, CardBodyProps } from "reactstrap";

interface NextCardBodyProps extends CardBodyProps {
  children: React.ReactNode;
}

const NextCardBody = forwardRef(
  (props: NextCardBodyProps, ref: Ref<HTMLDivElement>) => {
    return (
      <div ref={ref}>
        <CardBody {...props}>{props.children}</CardBody>
      </div>
    );
  },
);
NextCardBody.displayName = "NextCardBody";

export default NextCardBody;
