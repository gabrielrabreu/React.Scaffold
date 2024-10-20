import { type FC, type HTMLAttributes } from "react";

import "./ScfSidebarHeader.scss";

interface Props extends HTMLAttributes<HTMLDivElement> {
  logo: string;
  title: string;
}

const ScfSidebarHeader: FC<Props> = ({ logo, title }) => {
  return (
    <div className="scf-sidebar-header">
      <div className="scf-sidebar-header-logo">{logo}</div>
      <p className="scf-sidebar-header-title">{title}</p>
    </div>
  );
};

export { ScfSidebarHeader };
