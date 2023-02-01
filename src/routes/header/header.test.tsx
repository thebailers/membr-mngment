import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./header.component";

const setup = () =>
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

describe("the header component", () => {
  test("renders the logo", () => {
    setup();
    const logoElement = screen.getByText(/logo/i);
    expect(logoElement).toBeInTheDocument();
  });

  test("renders the menu", () => {
    setup();
    const menuElement = screen.getByText(/home/i);
    const classesElement = screen.getByText(/classes/i);
    expect(menuElement).toBeInTheDocument();
    expect(classesElement).toBeInTheDocument();
  });
});
