import React, { forwardRef, Ref } from "react";
import { NavbarBrand, NavbarBrandProps } from "reactstrap";

interface NextNavbarBrandProps extends NavbarBrandProps {
  children: React.ReactNode;
}

const NextNavbarBrand = forwardRef<HTMLDivElement, NextNavbarBrandProps>(
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
