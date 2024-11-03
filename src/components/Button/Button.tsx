import { type ButtonHTMLAttributes, type ForwardRefRenderFunction, forwardRef } from "react";

import styles from "./Button.module.scss";

const Button: ForwardRefRenderFunction<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, ...rest }, ref) => {
  return (
    <button
      ref={ref}
      className={styles["button"]}
      {...rest}
    >
      {children}
    </button>
  );
};

export default forwardRef(Button);
