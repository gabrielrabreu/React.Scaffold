import { type ButtonHTMLAttributes, type FC } from "react";

import styles from "./IconButton.module.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
}

const IconButton: FC<Props> = ({ icon, ...rest }) => {
  return (
    <button className={styles["icon-button"]} {...rest}>
      <span className="material-icons">{icon}</span>
    </button>
  );
};

export default IconButton;
