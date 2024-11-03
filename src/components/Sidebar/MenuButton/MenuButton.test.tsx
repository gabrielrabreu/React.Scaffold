import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import MenuButton from "./MenuButton";
import styles from "../Sidebar.module.scss";

describe("MenuButton", () => {
  it("should render children correctly", () => {
    const { getByText } = render(<MenuButton>Click Me</MenuButton>);

    const buttonElement = getByText(/Click Me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it("should have the correct class", () => {
    const { getByTestId } = render(
      <MenuButton data-testid="menu-button">Button</MenuButton>,
    );

    const menuButtonElement = getByTestId("menu-button");
    expect(menuButtonElement).toHaveClass(styles["menu-button"]);
  });

  it("should clone the passed component and apply props", () => {
    const { getByTestId } = render(
      <MenuButton component={<span></span>} data-testid="menu-button">
        Button
      </MenuButton>,
    );

    const menuButtonElement = getByTestId("menu-button");
    expect(menuButtonElement.tagName).toBe("SPAN");
    expect(menuButtonElement).toHaveClass(styles["menu-button"]);
  });
});
