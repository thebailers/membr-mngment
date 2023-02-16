import { screen, act } from "@testing-library/react";
import { Routes, Route } from "react-router-dom";
import { renderWithRouter } from "../../../utils/testUtils";

import SpecificClass from "../specific-class.component";

const setup = (route: string) =>
  renderWithRouter(
    <Routes>
      <Route path="classes/:weekday/:time" element={<SpecificClass />} />
    </Routes>,
    { route }
  );

describe("the specific class component", () => {
  it("renders the component", async () => {
    // jest.useFakeTimers();
    // jest.setSystemTime(new Date("Mon Jan 23 2023 18:14:00 GMT+0000"));
    // setup("/classes/monday/1830");
    // act(() => jest.advanceTimersByTime(1000));
    // expect(await screen.findByText(/monday at 1830/i)).toBeInTheDocument();
    // jest.useRealTimers();
  });

  // it("prevents member signing in if too long before class", async () => {
  //   jest.useFakeTimers();
  //   jest.setSystemTime(new Date("Mon Jan 23 2023 18:14:00 GMT+0000"));
  //   setup("/classes/monday/1830");
  //   act(() => jest.advanceTimersByTime(1000));
  //   expect(
  //     await screen.findByText(/Cannot sign in to this class yet/i)
  //   ).toBeInTheDocument();
  //   jest.useRealTimers();
  // });

  // it("allows the user to sign in if the current time is close to the class time", async () => {
  //   jest.useFakeTimers();
  //   jest.setSystemTime(new Date("Mon Jan 23 2023 18:15:00 GMT+0000"));
  //   setup("/classes/monday/1830");
  //   act(() => jest.advanceTimersByTime(1000));
  //   expect(await screen.findByText(/Sign in to class/i)).toBeInTheDocument();
  //   jest.useRealTimers();
  // });

  // it("displays a loading message while data & positive class signin status loads", async () => {
  //   jest.useFakeTimers();
  //   jest.setSystemTime(new Date("Mon Jan 23 2023 18:15:00 GMT+0000"));
  //   setup("/classes/monday/1830");
  //   expect(screen.getByText(/Loading spinner/i)).toBeInTheDocument();
  //   act(() => jest.advanceTimersByTime(2000));
  //   expect(await screen.findByText(/Sign in to class/i)).toBeInTheDocument();
  //   jest.useRealTimers();
  // });

  // it("displays a loading message while data & negative class signin status loads", async () => {
  //   jest.useFakeTimers();
  //   jest.setSystemTime(new Date("Mon Jan 23 2023 18:14:00 GMT+0000"));
  //   setup("/classes/monday/1830");
  //   expect(screen.getByText(/Loading spinner/i)).toBeInTheDocument();
  //   act(() => jest.advanceTimersByTime(2000));
  //   expect(
  //     await screen.findByText(/Cannot sign in to this class yet/i)
  //   ).toBeInTheDocument();
  //   jest.useRealTimers();
  // });
});
