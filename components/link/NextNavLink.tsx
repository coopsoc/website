import React, { forwardRef, Ref } from "react";
import { NavLink, NavLinkProps } from "reactstrap";

interface NextNavLinkProps extends NavLinkProps {
  children: React.ReactNode;
}

const NextNavLink = forwardRef<HTMLDivElement, NextNavLinkProps>(
  (props: NextNavLinkProps, ref: Ref<HTMLDivElement>) => {
    return (
      <div ref={ref}>
        <NavLink {...props}>{props.children}</NavLink>
      </div>
    );
  },
);

NextNavLink.displayName = "NextNavbarBrand";

export default NextNavLink;
