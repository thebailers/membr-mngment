import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import type { ReactNode, Dispatch, SetStateAction } from "react";
import type { DocumentData } from "firebase/firestore";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils";

type UserContextType = {
  currentUser: DocumentData | null | undefined;
  setCurrentUser: Dispatch<SetStateAction<DocumentData | null | undefined>>;
};

export const UserContext = createContext<UserContextType>({
  currentUser: null,
  setCurrentUser: () => {},
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<
    DocumentData | null | undefined
  >(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      let userSnapshot: DocumentData | null | undefined = null;
      if (user)
        userSnapshot = await (await createUserDocumentFromAuth(user)).data();
      setCurrentUser(userSnapshot);
    });
    return unsubscribe;
  }, []);

  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
