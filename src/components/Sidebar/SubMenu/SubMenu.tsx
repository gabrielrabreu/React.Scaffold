import {
  type AnchorHTMLAttributes,
  type FC,
  type ReactElement,
  type ReactNode,
  useRef,
  useState,
} from "react";
import { FaChevronRight } from "react-icons/fa";
import classNames from "classnames";

import Dropdown from "../../Dropdown";
import MenuButton from "../MenuButton";
import styles from "../Sidebar.module.scss";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  component?: ReactElement;
  icon?: ReactNode;
  isCollapsed?: boolean;
  label: string;
}

const SubMenu: FC<Props> = ({ children, component, icon, isCollapsed, label, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenWhenCollapsed, setIsOpenWhenCollapsed] = useState(false);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  const handleOnClick = () => {
    if (isCollapsed) {
      setIsOpenWhenCollapsed((prev) => !prev);
    } else {
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <li
      className={classNames(styles["menu-item"], {
        [styles["submenu--open"]]: isOpen,
      })}
    >
      <MenuButton
        component={component}
        ref={buttonRef}
        onClick={handleOnClick}
        {...rest}
      >
        {icon && <span className={styles["menu-icon"]}>{icon}</span>}
        <span className={styles["menu-label"]}>{label}</span>
        <span className={styles["submenu-toggle-icon"]}>
          <FaChevronRight />
        </span>
      </MenuButton>

      {!isCollapsed && (
        <div className={styles["submenu-content"]}>
          <ul>{children}</ul>
        </div>
      )}

      {isCollapsed && isOpenWhenCollapsed && (
        <Dropdown
          className={styles["dropdown"]}
          placement='right-start'
          referenceElement={buttonRef.current}
          onClose={() => setIsOpenWhenCollapsed(false)}
        >
          <ul>{children}</ul>
        </Dropdown>
      )}
    </li>
  );
};

export default SubMenu;
