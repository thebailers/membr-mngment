import { FC } from "react";
import { Member } from "../../utils/memberUtils";

type FilteredMembersProps = {
  potentialMembers: Member[];
  handleSignin: (member: Member) => void;
  signinInput: string;
};

const FilteredMembers: FC<FilteredMembersProps> = ({
  potentialMembers,
  handleSignin,
  signinInput,
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

      {signinInput && !potentialMembers.length && <p>No members found</p>}
    </>
  );
};

export default FilteredMembers;
