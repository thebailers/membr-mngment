import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./home.component";

const setup = () => render(<Home />);

describe("the home component", () => {
  test("renders the first para", () => {
    setup();
    const paraElement = screen.getByText(/Home content TBC/i);
    expect(paraElement).toBeInTheDocument();
  });
});
