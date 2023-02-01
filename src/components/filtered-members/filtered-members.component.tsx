import { FC } from "react";
import { Member } from "../../utils/memberUtils";

type FilteredMembersProps = {
  potentialMembers: Member[];
  handleSignin: (member: Member) => void;
  userHasTyped: boolean;
};

const FilteredMembers: FC<FilteredMembersProps> = ({
  potentialMembers,
  handleSignin,
  userHasTyped,
}) => {
  return (
    <>
      {potentialMembers && (
        <ul>
          {potentialMembers.map((m) => (
            <li
              key={`mem-${m.id}`}
              onClick={() => handleSignin(m)}
            >{`${m.firstName} ${m.lastName}`}</li>
          ))}
        </ul>
      )}

      {userHasTyped && !potentialMembers.length && <p>No members found</p>}
    </>
  );
};

export default FilteredMembers;
