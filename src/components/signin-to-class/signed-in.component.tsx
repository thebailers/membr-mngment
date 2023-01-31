import { FC } from "react";
import { Member } from "../../utils/memberUtils";

type SignedInProps = {
  members: Member[];
};

const SignedIn: FC<SignedInProps> = ({ members }) => {
  return (
    <div>
      <h3>Members signed in to class</h3>
      <ul>
        {members.map((m) => (
          <li key={`signedIn-${m.id}`}>
            {m.firstName} {m.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SignedIn;
