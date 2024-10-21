import { type HTMLAttributes, useEffect, useState } from "react";
import { usePopper } from "react-popper";
import classNames from "classnames";

import "./ScfPopper.scss";

interface Props extends HTMLAttributes<HTMLDivElement> {
  referenceElement: HTMLElement | null;
  onClose: () => void;
}

const ScfPopper: React.FC<Props> = ({
  referenceElement,
  children,
  className,
  onClose,
  ...rest
}) => {
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null,
  );

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "right-start",
  });

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
      style={styles.popper}
      {...attributes.popper}
      className={classNames("scf-popper", className)}
      {...rest}
    >
      {children}
    </div>
  );
};

export { ScfPopper };
