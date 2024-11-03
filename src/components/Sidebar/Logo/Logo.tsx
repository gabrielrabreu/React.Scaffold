import type { FC, HTMLAttributes } from "react";

import styles from "../Sidebar.module.scss";

interface Props extends HTMLAttributes<HTMLDivElement> {
  name: string;
}

const Logo: FC<Props> = ({ name, ...rest }) => {
  const abbreviation = name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("");

  return (
    <div
      className={styles["logo"]}
      {...rest}
    >
      <div className={styles["logo-abbreviation"]}>{abbreviation}</div>
      <p className={styles["logo-name"]}>{name}</p>
    </div>
  );
};
export default Logo;
