import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import type { DocumentData } from "firebase/firestore";

import ProtectedRoute from "../protected-route.component";
import Auth from "../../auth/auth.component";

import { UserContext } from "../../../contexts/user.context";

const setCurrentUser = jest.fn();

const setup = (currentUser: DocumentData | null | undefined) =>
  render(
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <MemoryRouter initialEntries={["/profile"]}>
        <Routes>
          <Route
            path="/profile"
            element={
              <ProtectedRoute user={currentUser}>
                <div data-testid="profile" />
              </ProtectedRoute>
            }
          />
          <Route path="/auth/*" element={<div data-testid="auth" />} />
        </Routes>
      </MemoryRouter>
    </UserContext.Provider>
  );

describe("protected route", () => {
  it("redirects to auth when user is not logged in", async () => {
    setup(null);
    expect(screen.queryByTestId("profile")).not.toBeInTheDocument();
    expect(screen.getByTestId("auth")).toBeInTheDocument();
  });

  it("displays the user display name when logged in", () => {
    const currentUser = {
      email: "billy@tubbins.com",
      displayName: "Billy Tubbins",
    };
    setup(currentUser);
    expect(screen.getByTestId("profile")).toBeInTheDocument();
    expect(screen.queryByTestId("auth")).not.toBeInTheDocument();
  });
});
