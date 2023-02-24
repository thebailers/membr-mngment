import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Routes, Route, Navigate } from "react-router-dom";
import type { DocumentData } from "firebase/firestore";

import Profile from "../../profile/profile.component";
import ProtectedRoute from "../protected-route.component";
import Auth from "../../auth/auth.component";

import { UserContext } from "../../../contexts/user.context";

const setCurrentUser = jest.fn();

describe("protected route", () => {
  it("redirects to auth when user is not logged in", async () => {
    const currentUser = null;
    render(
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <MemoryRouter initialEntries={["/profile"]}>
          <Routes>
            <Route
              path="/profile"
              element={
                <ProtectedRoute user={currentUser}>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route path="/auth/*" element={<Auth />} />
          </Routes>
        </MemoryRouter>
      </UserContext.Provider>
    );

    expect(await screen.findByText(/sign in/i)).not.toBeInTheDocument();
  });

  it("displays the user display name when logged in", () => {
    const currentUser = {
      email: "billy@tubbins.com",
      displayName: "Billy Tubbins",
    };
    render(
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <MemoryRouter>
          <ProtectedRoute user={currentUser}>
            <Profile />
          </ProtectedRoute>
        </MemoryRouter>
      </UserContext.Provider>
    );
    expect(screen.getByText(/billy tubbins/i)).toBeInTheDocument();
  });

  // it("redirects to authdsfsdhen user is not logged in", () => {
  //   setup();
  //   expect(screen.getByText(/billy tubbins/i)).toBeInTheDocument();
  // });
});
