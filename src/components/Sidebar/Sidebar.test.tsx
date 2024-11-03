import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import Sidebar from "./Sidebar";
import styles from "./Sidebar.module.scss";

describe("Sidebar", () => {
  it("should render children correctly", () => {
    const { getByText } = render(<Sidebar>Sidebar Content</Sidebar>);

    const sidebarContentElement = getByText(/Sidebar Content/i);
    expect(sidebarContentElement).toBeInTheDocument();
    expect(sidebarContentElement).toHaveClass(styles["sidebar-content"]);
  });

  it("should have the correct class when collapsed", () => {
    const { getByTestId } = render(
      <Sidebar
        isCollapsed={true}
        data-testid='sidebar'
      >
        Collapsed Sidebar
      </Sidebar>
    );

    const sidebarElement = getByTestId("sidebar");
    expect(sidebarElement).toHaveClass(styles["sidebar"]);
    expect(sidebarElement).toHaveClass(styles["sidebar--collapsed"]);
  });

  it("should have the correct class when not collapsed", () => {
    const { getByTestId } = render(
      <Sidebar
        isCollapsed={false}
        data-testid='sidebar'
      >
        Expanded Sidebar
      </Sidebar>
    );

    const sidebarElement = getByTestId("sidebar");
    expect(sidebarElement).toHaveClass(styles["sidebar"]);
    expect(sidebarElement).not.toHaveClass(styles["sidebar--collapsed"]);
  });
});
