import {
  type AnchorHTMLAttributes,
  type FC,
  type ReactElement,
  cloneElement,
} from "react";

import "./ScfSidebarMenuButton.scss";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  component?: ReactElement;
}

const ScfSidebarMenuButton: FC<Props> = ({ children, component, ...rest }) => {
  if (component) {
    const { ...props } = component.props;

    return cloneElement(
      component,
      {
        className: "scf-sidebar-menu-button",
        ...rest,
        ...props,
      },
      children,
    );
  } else {
    return (
      <a className="scf-sidebar-menu-button" {...rest}>
        {children}
      </a>
    );
  }
};

export { ScfSidebarMenuButton };
