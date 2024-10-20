import {
  type AnchorHTMLAttributes,
  type FC,
  type ReactElement,
  type ReactNode,
} from "react";

import { ScfSidebarMenuButton } from "../ScfSidebarMenuButton";

import "./ScfSidebarMenuItem.scss";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  component?: ReactElement;
  icon?: ReactNode;
}

const ScfSidebarMenuItem: FC<Props> = ({
  children,
  component,
  icon,
  ...rest
}) => {
  return (
    <li className="scf-sidebar-menu-item">
      <ScfSidebarMenuButton component={component} {...rest}>
        {icon && <span className="scf-sidebar-menu-item-icon">{icon}</span>}
        <span className="scf-sidebar-menu-item-label">{children}</span>
      </ScfSidebarMenuButton>
    </li>
  );
};

export { ScfSidebarMenuItem };
