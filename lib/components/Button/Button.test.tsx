import { describe, expect, it, vi } from "vitest";
import { fireEvent, render } from "@testing-library/react";

import Button from "./Button";
import styles from "./Button.module.scss";

describe("Button", () => {
  it("should render primary button by default", () => {
    const { getByText } = render(<Button>Primary Button</Button>);

    const buttonElement = getByText(/Primary Button/i);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass(styles.button);
    expect(buttonElement).toHaveClass(styles["button--primary"]);
  });

  it("should render secondary button when variant is secondary", () => {
    const { getByText } = render(
      <Button variant="secondary">Secondary Button</Button>,
    );

    const buttonElement = getByText(/Secondary Button/i);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass(styles.button);
    expect(buttonElement).toHaveClass(styles["button--secondary"]);
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
});
