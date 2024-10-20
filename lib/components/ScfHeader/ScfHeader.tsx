import { type FC, type HTMLAttributes } from "react";

import "./ScfHeader.scss";

interface Props extends HTMLAttributes<HTMLHtmlElement> {}

const ScfHeader: FC<Props> = ({ children, ...rest }) => {
  return (
    <header className="scf-header" {...rest}>
      <div className="scf-header-container">{children}</div>
    </header>
  );
};

export { ScfHeader };
