import type { AnchorHTMLAttributes, FC, ReactElement, ReactNode } from "react";

import MenuButton from "../MenuButton";
import styles from "../Sidebar.module.scss";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  component?: ReactElement;
  icon?: ReactNode;
}

const MenuItem: FC<Props> = ({ children, component, icon, ...rest }) => {
  return (
    <li className={styles["menu-item"]}>
      <MenuButton component={component} {...rest}>
        {icon && <span className={styles["menu-icon"]}>{icon}</span>}
        <span className={styles["menu-label"]}>{children}</span>
      </MenuButton>
    </li>
  );
};

export default MenuItem;
