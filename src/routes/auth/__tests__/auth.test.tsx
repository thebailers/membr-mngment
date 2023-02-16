import { render, screen } from "@testing-library/react";
import Auth from "../auth.component";
import { renderWithRouter } from "../../../utils/testUtils";
import { Route, Routes } from "react-router-dom";

jest.mock("../../../utils/firebase/firebase.utils");

const setup = (route: string) =>
  renderWithRouter(
    <Routes>
      <Route path="/auth/*" element={<Auth />} />
    </Routes>,
    { route }
  );

describe("auth component", () => {
  it("renders the sign in/sign up auth options", async () => {
    setup("/auth");
    expect(screen.getAllByRole("listitem").length).toBe(2);
  });
});
