import React, { forwardRef, Ref } from "react";
import { NavLink, NavLinkProps } from "reactstrap";

const NextNavLink = forwardRef<HTMLDivElement, NavLinkProps>(
  (props: NavLinkProps, ref: Ref<HTMLDivElement>) => {
    return (
      <div ref={ref}>
        <NavLink {...props}>{props.children}</NavLink>
      </div>
    );
  },
);

NextNavLink.displayName = "NextNavbarBrand";

export default NextNavLink;
