import { type ButtonHTMLAttributes, type FC, type ReactNode } from "react";

import "./ScfIconButton.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
}

const ScfIconButton: FC<Props> = ({ icon, ...rest }) => {
  return (
    <button className="scf-icon-button" {...rest}>
      {icon}
    </button>
  );
};

export { ScfIconButton };
