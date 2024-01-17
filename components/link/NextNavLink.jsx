import React from "react";
import { NavLink } from "reactstrap";

const NextNavLink = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <NavLink {...props}>{props.children}</NavLink>
    </div>
  );
});
NextNavLink.displayName = "NextNavbarBrand";

export default NextNavLink;
