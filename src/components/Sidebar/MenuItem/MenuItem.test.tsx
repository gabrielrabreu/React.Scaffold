import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import MenuItem from "./MenuItem";
import styles from "../Sidebar.module.scss";

describe("MenuItem", () => {
  it("should render children correctly", () => {
    const { getByText } = render(<MenuItem>Test Item</MenuItem>);

    const labelElement = getByText(/Test Item/i);
    expect(labelElement).toBeInTheDocument();
  });

  it("should render an icon when provided", () => {
    const { getByText } = render(<MenuItem icon={<i>🔍</i>}>Test Item</MenuItem>);

    const iconElement = getByText("🔍");
    expect(iconElement).toBeInTheDocument();
  });

  it("should have the correct classes", () => {
    const { getByText } = render(<MenuItem icon={<i>🔍</i>}>Test Item</MenuItem>);

    const menuItemElement = getByText(/Test Item/i).closest("li");
    expect(menuItemElement).toHaveClass(styles["menu-item"]);

    const menuButtonElement = getByText(/Test Item/i).closest("a");
    expect(menuButtonElement).toHaveClass(styles["menu-button"]);

    const iconElement = getByText("🔍").closest("span");
    expect(iconElement).toHaveClass(styles["menu-icon"]);

    const labelElement = getByText(/Test Item/i);
    expect(labelElement).toHaveClass(styles["menu-label"]);
  });
});
