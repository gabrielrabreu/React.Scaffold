import { FC, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";

import { Dropdown, ImageButton } from "../../../lib/main";

import styles from "./AccountDropdown.module.scss";

const AccountDropdown: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <ImageButton
        src="https://i.pinimg.com/736x/dc/28/a7/dc28a77f18bfc9aaa51c3f61080edda5.jpg"
        alt="Profile Image"
        onClick={() => setIsOpen((prev) => !prev)}
        ref={buttonRef}
      />

      {isOpen && (
        <Dropdown
          referenceElement={buttonRef.current}
          placement="bottom-start"
          onClose={() => setIsOpen(false)}
        >
          <div>
            <Link to="/auth/login" className={styles["menu-item"]}>
              <span className="material-icons">logout</span>
              <span>Logout</span>
            </Link>
          </div>
        </Dropdown>
      )}
    </>
  );
};

export default AccountDropdown;
