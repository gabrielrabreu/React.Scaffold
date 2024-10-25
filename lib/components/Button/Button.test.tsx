import { describe, expect, it, vi } from "vitest";
import { fireEvent, render } from "@testing-library/react";

import Button from "./Button";
import styles from "./Button.module.scss";

describe("Button", () => {
  it("should render children correctly", () => {
    const { getByText } = render(<Button>Click Me</Button>);

    const buttonElement = getByText(/Click Me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it("should call onClick handler when clicked", () => {
    const handleClick = vi.fn();

    const { getByText } = render(
      <Button onClick={handleClick}>Click Me</Button>,
    );

    const buttonElement = getByText(/Click Me/i);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should have the correct class", () => {
    const { getByText } = render(<Button>Button</Button>);

    const buttonElement = getByText(/Button/i);
    expect(buttonElement).toHaveClass(styles["button"]);
  });
});
