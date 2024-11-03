import { describe, expect, it, vi } from "vitest";
import { fireEvent, render } from "@testing-library/react";

import IconButton from "./IconButton";
import styles from "./IconButton.module.scss";

describe("IconButton", () => {
  it("should render the icon correctly", () => {
    const { getByText } = render(<IconButton icon="edit" aria-label="Edit" />);

    const iconElement = getByText(/edit/i);
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveClass("material-icons");
  });

  it("should call onClick handler when clicked", () => {
    const handleClick = vi.fn();

    const { getByLabelText } = render(
      <IconButton icon="edit" onClick={handleClick} aria-label="Edit" />,
    );

    const iconElement = getByLabelText(/Edit/i);
    fireEvent.click(iconElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should have the correct class", () => {
    const { getByLabelText } = render(
      <IconButton icon="edit" aria-label="Edit" />,
    );

    const iconElement = getByLabelText(/Edit/i);
    expect(iconElement).toHaveClass(styles["icon-button"]);
  });
});
