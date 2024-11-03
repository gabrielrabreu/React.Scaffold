import { describe, expect, it } from "vitest";
import { render, fireEvent } from "@testing-library/react";

import SubMenu from "./SubMenu";
import styles from "../Sidebar.module.scss";

describe("SubMenu", () => {
  it("should render the label correctly", () => {
    const { getByText } = render(<SubMenu label='Test SubMenu'>SubMenu Content</SubMenu>);

    const labelElement = getByText(/Test SubMenu/i);
    expect(labelElement).toBeInTheDocument();

    fireEvent.mouseDown(document.body);
  });

  it("should toggle submenu open state on click when not collapsed", () => {
    const { getByText } = render(
      <SubMenu
        label='Test SubMenu'
        isCollapsed={false}
      >
        <li>Item 1</li>
        <li>Item 2</li>
      </SubMenu>
    );

    const toggleButton = getByText(/Test SubMenu/i);
    fireEvent.click(toggleButton);

    expect(getByText(/Item 1/i)).toBeInTheDocument();
    expect(getByText(/Item 2/i)).toBeInTheDocument();

    fireEvent.mouseDown(document.body);
  });

  it("should toggle dropdown open state when collapsed", () => {
    const { getByText } = render(
      <SubMenu
        label='Test SubMenu'
        isCollapsed={true}
      >
        <li>Item 1</li>
        <li>Item 2</li>
      </SubMenu>
    );

    const toggleButton = getByText(/Test SubMenu/i);
    fireEvent.click(toggleButton);

    expect(getByText(/Item 1/i)).toBeInTheDocument();
    expect(getByText(/Item 2/i)).toBeInTheDocument();

    fireEvent.mouseDown(document.body);
  });

  it("should apply the correct classes", () => {
    const { getByText } = render(<SubMenu label='Test SubMenu'>SubMenu Content</SubMenu>);

    const menuItemElement = getByText(/Test SubMenu/i).closest("li");
    expect(menuItemElement).toHaveClass(styles["menu-item"]);

    const toggleIconElement = getByText(/Test SubMenu/i).nextSibling;
    expect(toggleIconElement).toHaveClass(styles["submenu-toggle-icon"]);

    fireEvent.mouseDown(document.body);
  });

  it("should render the icon when provided", () => {
    const { getByText } = render(
      <SubMenu
        label='Test SubMenu'
        icon={<i>🔍</i>}
      >
        SubMenu Content
      </SubMenu>
    );

    const iconElement = getByText("🔍");
    expect(iconElement).toBeInTheDocument();

    fireEvent.mouseDown(document.body);
  });
});
