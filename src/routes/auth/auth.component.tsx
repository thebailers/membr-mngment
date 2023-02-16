import { Routes, Route, Link, Navigate } from "react-router-dom";
import SignUp from "./sign-up/sign-up.component";
import SignIn from "./sign-in/sign-in.component";
import { AuthWrapper } from "./auth.styles";

const Auth = () => {
  return (
    <AuthWrapper>
      {/* split auth, sign in and sign up */}
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
