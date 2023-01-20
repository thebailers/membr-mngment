import { FC } from "react";
import { HorizontalMenuLink } from "../../global-styles";

type ClassMenuProps = {
  weekdayNumber: number | undefined;
};

const ClassesMenu: FC<ClassMenuProps> = ({ weekdayNumber }) => {
  return (
    <ul data-testid="classes-byday-menu">
      <li>
        <HorizontalMenuLink $active={weekdayNumber === 1} to="/classes/monday">
          Monday
        </HorizontalMenuLink>
      </li>
      <li>
        <HorizontalMenuLink $active={weekdayNumber === 2} to="/classes/tuesday">
          Tuesday
        </HorizontalMenuLink>
      </li>
      <li>
        <HorizontalMenuLink
          $active={weekdayNumber === 3}
          to="/classes/wednesday"
        >
          Wednesday
        </HorizontalMenuLink>
      </li>
      <li>
        <HorizontalMenuLink
          $active={weekdayNumber === 4}
          to="/classes/thursday"
        >
          Thursday
        </HorizontalMenuLink>
      </li>
      <li>
        <HorizontalMenuLink $active={weekdayNumber === 5} to="/classes/friday">
          Friday
        </HorizontalMenuLink>
      </li>
      <li>
        <HorizontalMenuLink
          $active={weekdayNumber === 6}
          to="/classes/saturday"
        >
          Saturday
        </HorizontalMenuLink>
      </li>
      <li>
        <HorizontalMenuLink $active={weekdayNumber === 0} to="/classes/sunday">
          Sunday
        </HorizontalMenuLink>
      </li>
    </ul>
  );
};

export default ClassesMenu;
