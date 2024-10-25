import type { FC, MenuHTMLAttributes } from "react";

import styles from "../Sidebar.module.scss";

const Menu: FC<MenuHTMLAttributes<HTMLMenuElement>> = ({
  children,
  ...rest
}) => {
  return (
    <nav className={styles["menu"]} {...rest}>
      <ul>{children}</ul>
    </nav>
  );
};

export default Menu;
