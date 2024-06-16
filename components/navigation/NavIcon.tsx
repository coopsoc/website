import React from "react";

import { NavItem, NavLink, UncontrolledTooltip } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface NavIconProps {
  href: string;
  id: string;
  icon: IconDefinition;
  collapseText: string;
  tooltip: string;
}

const NavIcon = ({ href, id, icon, collapseText, tooltip }: NavIconProps) => {
  return (
    <NavItem>
      <NavLink className="nav-link-icon" href={href} id={id} target="_blank">
        <FontAwesomeIcon icon={icon} />
        <span className="nav-link-inner--text d-lg-none ms-2">
          {collapseText}
        </span>
      </NavLink>
      <UncontrolledTooltip delay={0} target={id}>
        {tooltip}
      </UncontrolledTooltip>
    </NavItem>
  );
};

export default NavIcon;
