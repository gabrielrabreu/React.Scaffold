import { HTMLAttributes, useEffect, useState, type FC } from "react";
import { usePopper } from "react-popper";
import classNames from "classnames";

import styles from "./Dropdown.module.scss";

type Placement =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "top-start"
  | "top-end"
  | "bottom-start"
  | "bottom-end"
  | "left-start"
  | "left-end"
  | "right-start"
  | "right-end";

interface Props extends HTMLAttributes<HTMLDivElement> {
  referenceElement: HTMLElement | null;
  placement?: Placement;
  onClose: () => void;
}

const Dropdown: FC<Props> = ({
  referenceElement,
  children,
  className,
  placement = "bottom",
  onClose,
  ...rest
}) => {
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null,
  );

  const { styles: popperStyles, attributes } = usePopper(
    referenceElement,
    popperElement,
    {
      placement: placement,
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 10],
          },
        },
      ],
    },
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popperElement &&
        referenceElement &&
        !popperElement.contains(event.target as Node) &&
        !referenceElement.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popperElement, referenceElement, onClose]);

  return (
    <div
      ref={setPopperElement}
      style={popperStyles.popper}
      {...attributes.popper}
      className={classNames(styles["dropdown"], className)}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Dropdown;
