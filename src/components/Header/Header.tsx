import type { FC, HTMLAttributes } from "react";

import styles from "./Header.module.scss";

const Header: FC<HTMLAttributes<HTMLHtmlElement>> = ({ children, ...rest }) => {
  return (
    <header
      className={styles["header"]}
      {...rest}
    >
      <div className={styles["header-content"]}>{children}</div>
    </header>
  );
};

export default Header;
