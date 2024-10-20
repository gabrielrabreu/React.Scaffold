import { type FC, type HTMLAttributes } from "react";

import classNames from "classnames";

import "./ScfSidebar.scss";

interface Props extends HTMLAttributes<HTMLHtmlElement> {
  collapsed?: boolean;
}

const ScfSidebar: FC<Props> = ({ children, collapsed, ...rest }) => {
  return (
    <aside
      className={classNames("scf-sidebar", {
        ["scf-sidebar--collapsed"]: collapsed,
      })}
      {...rest}
    >
      <div className="scf-sidebar-container">{children}</div>
    </aside>
  );
};

export { ScfSidebar };
