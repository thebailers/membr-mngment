import { useContext, useEffect } from "react";
import {
  Routes,
  Route,
  Link,
  Navigate,
  redirect,
  useNavigate,
} from "react-router-dom";
import SignUp from "./sign-up/sign-up.component";
import SignIn from "./sign-in/sign-in.component";

import { UserContext } from "../../contexts/user.context";

import { AuthWrapper } from "./auth.styles";

const Auth = () => {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) navigate("/classes");
  }, [currentUser, navigate]);

  return (
    <AuthWrapper>
      <ul>
        <li>
          <Link to="/auth/sign-up">sign up</Link>
        </li>
        <li>
          <Link to="/auth/sign-in">sign in</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Navigate to="/auth/sign-up" />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </AuthWrapper>
  );
};

export default Auth;
