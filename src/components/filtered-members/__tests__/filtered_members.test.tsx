import { render, screen, fireEvent } from "@testing-library/react";
import FilteredMembers from "../filtered-members.component";
import { Member } from "../../../utils/member.utils";

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
      userHasTyped={true}
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

  it("calls handleSignin when filtered member is clicked", () => {
    setup();
    const link = screen.getByText(/billy tubbins/i);
    fireEvent.click(link);
    expect(mockHandleSignin).toBeCalledTimes(1);
  });

  it("displays when no users are found", () => {
    render(
      <FilteredMembers
        potentialMembers={[]}
        handleSignin={mockHandleSignin}
        userHasTyped={true}
      />
    );
    expect(screen.getByText(/no members found/i)).toBeInTheDocument();
  });
});
