import {
  type ButtonHTMLAttributes,
  type ForwardRefRenderFunction,
  forwardRef,
} from "react";

import styles from "./ImageButton.module.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  src: string;
  alt: string;
}

const ImageButton: ForwardRefRenderFunction<HTMLButtonElement, Props> = (
  { src, alt, ...rest },
  ref,
) => {
  return (
    <button ref={ref} className={styles["image-button"]} {...rest}>
      <img src={src} alt={alt} className={styles["image"]} />
    </button>
  );
};

export default forwardRef(ImageButton);
