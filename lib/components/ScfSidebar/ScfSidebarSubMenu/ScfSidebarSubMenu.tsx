import {
  type AnchorHTMLAttributes,
  type FC,
  type ReactElement,
  type ReactNode,
  useState,
} from "react";
import { FaChevronRight } from "react-icons/fa";
import classNames from "classnames";

import { ScfSidebarMenuButton } from "../ScfSidebarMenuButton";
import { ScfPopper } from "../../ScfPopper";

import "./ScfSidebarSubMenu.scss";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  collapsed?: boolean;
  component?: ReactElement;
  icon?: ReactNode;
  label: string;
}

const ScfSidebarSubMenu: FC<Props> = ({
  children,
  collapsed,
  component,
  icon,
  label,
  ...rest
}) => {
  const [opened, setOpened] = useState(false);
  const [popperOpened, setPopperOpened] = useState(false);

  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(
    null,
  );

  const handleOnClick = () => {
    if (collapsed) {
      setPopperOpened((prev) => !prev);
    } else {
      setOpened((prev) => !prev);
    }
  };

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
      handleOnClick();
    }
  };

  return (
    <li
      className={classNames("scf-sidebar-submenu", {
        ["scf-sidebar-submenu--opened"]: opened,
        ["scf-sidebar-submenu--collapsed"]: collapsed,
      })}
    >
      <ScfSidebarMenuButton
        component={component}
        onClick={handleOnClick}
        onKeyDown={handleOnKeyDown}
        tabIndex={0}
        ref={setReferenceElement}
        {...rest}
      >
        {icon && <span className="scf-sidebar-submenu-icon">{icon}</span>}
        <span className="scf-sidebar-submenu-label">{label}</span>
        <span className="scf-sidebar-submenu-expand-icon">
          <FaChevronRight />
        </span>
      </ScfSidebarMenuButton>

      {collapsed ? (
        popperOpened && (
          <ScfPopper
            referenceElement={referenceElement}
            onClose={() => setPopperOpened(false)}
            className="scf-sidebar-submenu-popper"
          >
            <ul className="scf-sidebar-submenu-content-ul">{children}</ul>
          </ScfPopper>
        )
      ) : (
        <div className="scf-sidebar-submenu-content">
          <ul className="scf-sidebar-submenu-content-ul">{children}</ul>
        </div>
      )}
    </li>
  );
};

export { ScfSidebarSubMenu };
