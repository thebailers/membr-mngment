import { render, screen } from "@testing-library/react";
import FilteredMembers from "../filtered-members.component";
import { Member } from "../../../utils/memberUtils";

const mockHandleSignin = jest.fn();

const mockPotentialMembers: Member[] = [
  {
    id: "1",
    firstName: "Joe",
    lastName: "Bloggs",
  },
  {
    id: "2",
    firstName: "Mary",
    lastName: "Smith",
  },
  {
    id: "3",
    firstName: "Trevor",
    lastName: "Small",
  },
  {
    id: "4",
    firstName: "Billy",
    lastName: "Tubbins",
  },
];

const setup = () => {
  render(
    <FilteredMembers
      potentialMembers={mockPotentialMembers}
      handleSignin={mockHandleSignin}
      signinInput={""}
    />
  );
};

describe("filtered members", () => {
  it("displays the filtered members correctly", () => {
    setup();
    expect(screen.getByText(/joe bloggs/i)).toBeInTheDocument();
    expect(screen.getByText(/mary smith/i)).toBeInTheDocument();
    expect(screen.getByText(/trevor small/i)).toBeInTheDocument();
    expect(screen.getByText(/billy tubbins/i)).toBeInTheDocument();
  });
});
