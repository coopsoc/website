import React from "react";
import { NavbarBrand } from "reactstrap";

const NextNavbarBrand = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <NavbarBrand {...props}>{props.children}</NavbarBrand>
    </div>
  );
});
NextNavbarBrand.displayName = "NextNavbarBrand";

export default NextNavbarBrand;
