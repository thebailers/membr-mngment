import { useState, ChangeEvent, useEffect, FC } from "react";
import { Member } from "../../utils/memberUtils";
import { SignInInput, SignInlabel } from "./signin-to-class-form.styles";

export type SigninToClassFormProps = {
  members: Member[];
  handleSignin: (m: Member) => void;
};

const SigninToClassForm: FC<SigninToClassFormProps> = ({
  members,
  handleSignin,
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [potentialMembers, setPotentialMembers] = useState<Member[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
  };

  useEffect(() => {
    let filteredMembers: Member[] = [];
    if (inputValue) {
      filteredMembers = members.filter((m) => {
        const regexp = new RegExp(inputValue, "i");
        return `${m.firstName} ${m.lastName}`.match(regexp);
      });
    }
    setPotentialMembers(filteredMembers);
  }, [inputValue, members]);

  return (
    <div>
      <SignInlabel htmlFor="class-signin">Sign in to class</SignInlabel>
      <SignInInput
        type="text"
        name="class-signin"
        aria-label="class-signin"
        id="class-signin"
        value={inputValue}
        onChange={handleChange}
      />
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

      {inputValue && !potentialMembers.length && <p>No members found</p>}
    </div>
  );
};

export default SigninToClassForm;
