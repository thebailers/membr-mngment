import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { UserContext } from "../../contexts/user.context";

import { daysOfWeekArray, urlFriendlyWeekday } from "../../utils/utils";

const Header = () => {
  const [currentDay, setCurrentDay] = useState<string>(
    urlFriendlyWeekday(daysOfWeekArray[new Date().getDay()])
  );
  const { currentUser } = useContext(UserContext);

  return (
    <div>
      <div className="logo">Logo</div>
      <div className="menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {currentUser ? (
              <span onClick={signOutUser}>Sign out</span>
            ) : (
              <Link to="/auth">Log in or register</Link>
            )}
          </li>
          {currentDay && (
            <li>
              <Link to={`/classes/${currentDay}`}>
                Classes [TODO: Conditional: if logged in]
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
