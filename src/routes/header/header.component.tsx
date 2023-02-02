import { useState } from "react";
import { Link } from "react-router-dom";

import { daysOfWeekArray, urlFriendlyWeekday } from "../../utils/utils";

const Header = () => {
  const [currentDay, setCurrentDay] = useState<string>(
    urlFriendlyWeekday(daysOfWeekArray[new Date().getDay()])
  );
  return (
    <div>
      <div className="logo">Logo</div>
      <div className="menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/auth">Sign up</Link>
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