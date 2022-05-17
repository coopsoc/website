import React from "react";
import { CardBody } from "reactstrap";

const NextCardBody = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <CardBody {...props}>
        {props.children}
      </CardBody>
    </div>
  );
});
NextCardBody.displayName = "NextCardBody";

export default NextCardBody;
