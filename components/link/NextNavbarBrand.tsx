import React, { forwardRef, Ref } from "react";
import { NavbarBrand, NavbarBrandProps } from "reactstrap";

const NextNavbarBrand = forwardRef<HTMLDivElement, NavbarBrandProps>(
  (props, ref: Ref<HTMLDivElement>) => {
    return (
      <div ref={ref}>
        <NavbarBrand {...props}>{props.children}</NavbarBrand>
      </div>
    );
  },
);
NextNavbarBrand.displayName = "NextNavbarBrand";

export default NextNavbarBrand;
