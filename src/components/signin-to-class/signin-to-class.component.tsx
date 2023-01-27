import React, { FC, useEffect, useState } from "react";
import SpecificClassHeader from "../specific-class/specific-class-header.component";
import SigninToClassForm from "./signin-to-class-form.component";

import { AccessStatus } from "../specific-class/specific-class.component";

import { NotesContainer, NotesHeader, NotesList } from "../../global-styles";
import { Member, memberData } from "../../utils/memberUtils";

export type SignInToClassProps = {
  dayOfWeek: string;
  time: string;
  canSignIn: AccessStatus;
};

const removeDuplicates = (arr1: Member[], arr2: Member[]) =>
  arr1.filter(
    (array1Item) => arr2.findIndex((e) => e.id === array1Item.id) === -1
  );

const SigninToClass: FC<SignInToClassProps> = ({
  dayOfWeek,
  time,
  canSignIn,
}) => {
  const [signedIn, setSignedIn] = useState<Member[]>([]);
  const [notSignedIn, setNotSignedIn] = useState<Member[]>(memberData);

  // when user is signed in, remove from notSignedIn array
  useEffect(() => {
    if (signedIn.length > 0) {
      const removedMember = removeDuplicates(notSignedIn, signedIn);
      setNotSignedIn(removedMember);
    }
  }, [signedIn, notSignedIn]);

  const handleSignin = ({ id, firstName, lastName }: Member) => {
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
            members={notSignedIn}
            handleSignin={handleSignin}
          />
          {signedIn.length > 0 && (
            <div>
              <h3>Members signed in to class</h3>
              <ul>
                {signedIn.map((m) => (
                  <li key={`signedIn-${m.id}`}>
                    {m.firstName} {m.lastName}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </React.Fragment>
      ) : (
        <p>Cannot sign in to this class yet</p>
      )}
    </div>
  );
};

export default SigninToClass;
