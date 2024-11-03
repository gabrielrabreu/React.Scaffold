import type { FC, HTMLAttributes } from "react";
import classNames from "classnames";

import styles from "./Sidebar.module.scss";

interface Props extends HTMLAttributes<HTMLHtmlElement> {
  isCollapsed?: boolean;
}

const Sidebar: FC<Props> = ({ children, className, isCollapsed, ...rest }) => {
  return (
    <aside
      className={classNames(
        styles["sidebar"],
        {
          [styles["sidebar--collapsed"]]: isCollapsed,
        },
        className,
      )}
      {...rest}
    >
      <div className={styles["sidebar-content"]}>{children}</div>
    </aside>
  );
};

export default Sidebar;
