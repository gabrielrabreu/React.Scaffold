import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import Menu from "./Menu";
import styles from "../Sidebar.module.scss";

describe("Menu", () => {
  it("should render children correctly", () => {
    const { getByText } = render(
      <Menu>
        <li>Item 1</li>
        <li>Item 2</li>
      </Menu>
    );

    const item1 = getByText(/Item 1/i);
    const item2 = getByText(/Item 2/i);

    expect(item1).toBeInTheDocument();
    expect(item2).toBeInTheDocument();
  });

  it("should have the correct class", () => {
    const { getByTestId } = render(<Menu data-testid='menu'>Menu Content</Menu>);

    const menuElement = getByTestId("menu");
    expect(menuElement).toHaveClass(styles["menu"]);
  });
});
