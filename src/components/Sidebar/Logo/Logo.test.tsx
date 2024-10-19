import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import Logo from "./Logo";
import styles from "../Sidebar.module.scss";

describe("Logo", () => {
  it("should render the correct abbreviation from the name", () => {
    const { getByText } = render(<Logo name='Scaffold Library' />);

    const abbreviationElement = getByText("SL");
    expect(abbreviationElement).toBeInTheDocument();
  });

  it("should render the full name", () => {
    const { getByText } = render(<Logo name='Scaffold Library' />);

    const nameElement = getByText("Scaffold Library");
    expect(nameElement).toBeInTheDocument();
  });

  it("should have the correct class", () => {
    const { getByText } = render(<Logo name='Scaffold Library' />);

    const abbreviationElement = getByText("SL");
    const nameElement = getByText("Scaffold Library");
    const logoElement = abbreviationElement.parentElement;

    expect(abbreviationElement).toHaveClass(styles["logo-abbreviation"]);
    expect(nameElement).toHaveClass(styles["logo-name"]);
    expect(logoElement).toHaveClass(styles["logo"]);
  });
});
