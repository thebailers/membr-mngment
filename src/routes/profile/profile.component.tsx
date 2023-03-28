import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";

const Profile = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <div>
      <h1>{currentUser!.displayName}</h1>
      <dl>
        <dt>member_since</dt>
        <dd>Date</dd>
        <dt>emergency_contact</dt>
        <dd>number</dd>
        <dt>training_record</dt>
        <dd>[training-record]</dd>
      </dl>

      <h2>Training record</h2>
      <dl>
        <dt>belt_color</dt>
        <dd>[belt-colors]</dd>
      </dl>

      <h2>Belt colours</h2>
      <ul>
        <li>white</li>
        <li>blue</li>
        <li>purple</li>
        <li>brown</li>
        <li>black</li>
      </ul>
    </div>
  );
};

export default Profile;
