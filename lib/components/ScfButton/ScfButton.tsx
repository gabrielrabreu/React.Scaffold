import { type ButtonHTMLAttributes, type FC } from "react";

import classNames from "classnames";

import "./ScfButton.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const ScfButton: FC<Props> = ({ variant, ...rest }) => {
  return (
    <button
      className={classNames("scf-button", {
        ["scf-button--primary"]: variant === "primary",
        ["scf-button--secondary"]: variant === "secondary",
      })}
      {...rest}
    />
  );
};

export { ScfButton };
