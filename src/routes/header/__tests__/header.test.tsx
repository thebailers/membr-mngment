import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { signOutUser as mockSignOutUser } from "../../../utils/firebase/firebase.utils";

import Header from "../header.component";

import { UserContext } from "../../../contexts/user.context";
import userEvent from "@testing-library/user-event";

jest.mock("../../../utils/firebase/firebase.utils");

const setup = () =>
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

const customRender = (
  ui: React.ReactNode,
  { providerProps, ...renderOptions }: { providerProps: any }
) => {
  return render(
    <UserContext.Provider {...providerProps}>
      <MemoryRouter>{ui}</MemoryRouter>
    </UserContext.Provider>,
    renderOptions
  );
};

describe("the header component", () => {
  it("renders the logo", () => {
    setup();
    const logoElement = screen.getByText(/logo/i);
    expect(logoElement).toBeInTheDocument();
  });

  it("renders the menu", () => {
    setup();
    const menuElement = screen.getByText(/home/i);
    const classesElement = screen.getByText(/classes/i);
    expect(menuElement).toBeInTheDocument();
    expect(classesElement).toBeInTheDocument();
  });

  it("renders a log in link when user is not authenticated", () => {
    const providerProps = {
      value: {
        currentUser: null,
      },
    };
    customRender(<Header />, { providerProps });
    expect(screen.getByText(/log in or register/i)).toBeInTheDocument();
  });

  it("renders a sign out link when user is authenticated", () => {
    const providerProps = {
      value: {
        currentUser: {
          email: "billy@tubbins.com",
        },
      },
    };
    customRender(<Header />, { providerProps });
    expect(screen.getByText(/sign out/i)).toBeInTheDocument();
  });

  it("sign out link removes user from context", async () => {
    (mockSignOutUser as jest.Mock).mockImplementation(() => {
      return undefined;
    });
    const providerProps = {
      value: {
        currentUser: {
          email: "billy@tubbins.com",
        },
      },
    };
    customRender(<Header />, { providerProps });
    expect(screen.getByText(/sign out/i)).toBeInTheDocument();
    userEvent.click(screen.getByText(/sign out/i));
    expect(mockSignOutUser).toBeCalledTimes(1);
  });
});
