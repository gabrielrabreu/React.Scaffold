import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import Header from "./Header";
import styles from "./Header.module.scss";

describe("Header", () => {
  it("should render children correctly", () => {
    const { getByText } = render(<Header>Test Content</Header>);

    const contentElement = getByText(/Test Content/i);
    expect(contentElement).toBeInTheDocument();
  });

  it("should have the correct class", () => {
    const { getByText } = render(<Header>My Header</Header>);

    const headerElement = getByText(/My Header/i);
    expect(headerElement).toBeInTheDocument();
    expect(headerElement.closest("header")).toHaveClass(styles["header"]);
  });
});
