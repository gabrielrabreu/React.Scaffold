import { useRef, useState } from "react";
import { describe, expect, it, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";

import Dropdown from "./Dropdown";
import styles from "./Dropdown.module.scss";

const TestComponent = ({ onClose }: { onClose: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <button ref={buttonRef} onClick={() => setIsOpen((prev) => !prev)}>
        Reference Element
      </button>
      {isOpen && (
        <Dropdown
          referenceElement={buttonRef.current}
          onClose={() => {
            setIsOpen(false);
            onClose();
          }}
          data-testid="dropdown"
        >
          Dropdown Content
        </Dropdown>
      )}
    </>
  );
};

describe("Dropdown", () => {
  it("should render the dropdown with children", () => {
    const handleClose = vi.fn();

    const { getByText } = render(<TestComponent onClose={handleClose} />);

    fireEvent.click(getByText(/Reference Element/i));

    const dropdownContent = getByText(/Dropdown Content/i);
    expect(dropdownContent).toBeInTheDocument();

    fireEvent.mouseDown(document.body);
  });

  it("should call onClose when clicking outside", () => {
    const handleClose = vi.fn();

    const { getByText } = render(<TestComponent onClose={handleClose} />);

    fireEvent.click(getByText(/Reference Element/i));

    fireEvent.mouseDown(document.body);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("should not call onClose when clicking inside dropdown", () => {
    const handleClose = vi.fn();

    const { getByText } = render(<TestComponent onClose={handleClose} />);

    fireEvent.click(getByText(/Reference Element/i));

    const dropdownContent = getByText(/Dropdown Content/i);

    fireEvent.mouseDown(dropdownContent);

    expect(handleClose).toHaveBeenCalledTimes(0);

    fireEvent.mouseDown(document.body);
  });

  it("should have the correct class", () => {
    const handleClose = vi.fn();

    const { getByText, getByTestId } = render(
      <TestComponent onClose={handleClose} />,
    );

    fireEvent.click(getByText(/Reference Element/i));

    const dropdownElement = getByTestId("dropdown");
    expect(dropdownElement).toHaveClass(styles["dropdown"]);

    fireEvent.mouseDown(document.body);
  });
});
