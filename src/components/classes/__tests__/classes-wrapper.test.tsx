import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ClassesWrapper from "../classes-wrapper.component";

test("renders the ClassesWrapper component without crashing", () => {
  render(
    <MemoryRouter>
      <ClassesWrapper />
    </MemoryRouter>
  );
});
