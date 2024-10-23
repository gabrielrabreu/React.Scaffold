import { type ButtonHTMLAttributes, type FC } from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button: FC<Props> = ({ variant = "primary", children, ...rest }) => {
  return (
    <button
      className={classNames(styles["button"], {
        [styles["button--primary"]]: variant === "primary",
        [styles["button--secondary"]]: variant === "secondary",
      })}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
