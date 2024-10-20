import { type FC, type MenuHTMLAttributes } from "react";

import "./ScfSidebarMenu.scss";

interface Props extends MenuHTMLAttributes<HTMLMenuElement> {}

const ScfSidebarMenu: FC<Props> = ({ children }) => {
  return (
    <nav>
      <ul className="scf-sidebar-menu-ul">{children}</ul>
    </nav>
  );
};

export { ScfSidebarMenu };
