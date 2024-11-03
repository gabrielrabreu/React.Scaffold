import {
  type AnchorHTMLAttributes,
  type ReactElement,
  ForwardRefRenderFunction,
  cloneElement,
  forwardRef,
} from "react";
import classNames from "classnames";

import styles from "../Sidebar.module.scss";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  component?: ReactElement;
}

const MenuButton: ForwardRefRenderFunction<HTMLAnchorElement, Props> = (
  { children, className, component, ...rest },
  ref
) => {
  if (component) {
    return cloneElement(
      component,
      {
        className: classNames(styles["menu-button"], className),
        ref,
        ...rest,
        ...component.props,
      },
      children
    );
  } else {
    return (
      <a
        className={classNames(styles["menu-button"], className)}
        ref={ref}
        {...rest}
      >
        {children}
      </a>
    );
  }
};

export default forwardRef(MenuButton);
