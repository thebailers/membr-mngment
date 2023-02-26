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
    <div className="header">
      <div className="header__logo">Logo</div>

      <ul className="header__menu">
        <li className="header__menu--listitem">
          <Link to="/">Home</Link>
        </li>
        {!currentUser ? (
          <li className="header__menu--listitem">
            <Link to="/auth">Log in or register</Link>
          </li>
        ) : null}
        {currentDay && (
          <li className="header__menu--listitem">
            <Link to={`/classes/${currentDay}`}>Classes</Link>
          </li>
        )}
      </ul>

      {currentUser ? (
        <p>
          Signed in as <Link to="/profile">{currentUser.displayName}</Link>.
          <button onClick={signOutUser}>Sign out</button>
        </p>
      ) : null}
    </div>
  );
};

export default Header;
