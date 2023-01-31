import React, { FC, useCallback, useEffect, useState } from "react";

import SpecificClassHeader from "../specific-class/specific-class-header.component";
import SigninToClassForm from "./signin-to-class-form.component";
import SignedIn from "./signed-in.component";
import FilteredMembers from "../filtered-members/filtered-members.component";

import { AccessStatus } from "../specific-class/specific-class.component";

import { NotesContainer, NotesHeader, NotesList } from "../../global-styles";
import { Member, memberData } from "../../utils/memberUtils";
import { removeDuplicates, duplicateObjectInArrays } from "../../utils/utils";

export type SigninToClassProps = {
  dayOfWeek: string;
  time: string;
  canSignIn: AccessStatus;
};

const SigninToClass: FC<SigninToClassProps> = ({
  dayOfWeek,
  time,
  canSignIn,
}) => {
  const [signedIn, setSignedIn] = useState<Member[]>([]);
  const [notSignedIn, setNotSignedIn] = useState<Member[]>(memberData);
  const [potentialMembers, setPotentialMembers] = useState<Member[]>([]);
  const [signinInput, setSigninInput] = useState<string>("");

  // Set filtered list
  useEffect(() => {
    let filteredMembers: Member[] = [];
    if (signinInput) {
      filteredMembers = notSignedIn.filter((m) => {
        const regexp = new RegExp(signinInput, "i");
        return `${m.firstName} ${m.lastName}`.match(regexp);
      });
    }
    setPotentialMembers(filteredMembers);
  }, [signinInput, notSignedIn]);

  // If member has just signed in, remove member from not signed in list
  const removeFromNotSignedInCheck = useCallback(
    (signedIn: Member[]) => {
      if (duplicateObjectInArrays<Member>(signedIn, notSignedIn, "id")) {
        const removedMember = removeDuplicates(notSignedIn, signedIn);
        setNotSignedIn(removedMember);
      }
    },
    [notSignedIn]
  );

  // remove newly signed in member from notSigned in member list
  useEffect(() => {
    removeFromNotSignedInCheck(signedIn);
  }, [signedIn, removeFromNotSignedInCheck]);

  const handleSignin = ({ id, firstName, lastName }: Member) => {
    setSigninInput(""); // reset the sign in input
    const updatedMembers = [...signedIn, { id, firstName, lastName }];
    setSignedIn(updatedMembers);
  };

  return (
    <div>
      <SpecificClassHeader day={dayOfWeek} time={time} />

      <NotesContainer>
        <NotesHeader>[For Dev Only] Sample Members List</NotesHeader>
        <ul style={{ paddingInlineStart: "0", marginBlockStart: "10px" }}>
          {notSignedIn.map((m) => (
            <NotesList key={`memLis-${m.id}`}>
              {m.firstName} {m.lastName}
            </NotesList>
          ))}
        </ul>
      </NotesContainer>

      {canSignIn === AccessStatus.authorised ? (
        <React.Fragment>
          <SigninToClassForm
            setSigninInput={setSigninInput}
            signinInput={signinInput}
          />

          <FilteredMembers
            potentialMembers={potentialMembers}
            handleSignin={handleSignin}
            signinInput={signinInput}
          />

          {signedIn.length > 0 && <SignedIn members={signedIn} />}
        </React.Fragment>
      ) : (
        <p>Cannot sign in to this class yet</p>
      )}
    </div>
  );
};

export default SigninToClass;
