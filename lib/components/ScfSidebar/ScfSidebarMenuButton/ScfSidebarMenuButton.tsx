import {
  type AnchorHTMLAttributes,
  type ReactElement,
  cloneElement,
  forwardRef,
} from "react";
import classNames from "classnames";

import "./ScfSidebarMenuButton.scss";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  component?: ReactElement;
}

const ScfSidebarMenuButton = forwardRef<HTMLAnchorElement, Props>(
  ({ className, children, component, ...rest }, ref) => {
    if (component) {
      const { compClassName, ...props } = component.props;

      return cloneElement(
        component,
        {
          className: classNames(
            "scf-sidebar-menu-button",
            className,
            compClassName,
          ),
          ref,
          ...rest,
          ...props,
        },
        children,
      );
    } else {
      return (
        <a
          className={classNames("scf-sidebar-menu-button", className)}
          ref={ref}
          {...rest}
        >
          {children}
        </a>
      );
    }
  },
);

export { ScfSidebarMenuButton };
