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
        <dt>attendance_log</dt>
        <dd>[attendance-log]</dd>
      </dl>

      <h2>Training record</h2>
      <p>
        Need to list kids belt colours, and provide a way to lock belt types to
        member type - adult/child
      </p>
      <dl>
        <dt>belt_color</dt>
        <dd>[belt-colors]</dd>
      </dl>

      <h2>Belt colours</h2>
      <ul>
        <li>white [c/a]</li>
        <li>[ADD KIDS BELTS]</li>
        <li>grey/white</li>
        <li>grey</li>
        <li>grey/black</li>
        <li>yellow/white</li>
        <li>yellow</li>
        <li>yellow/black</li>
        <li>orange/white</li>
        <li>orange</li>
        <li>orange/black</li>
        <li>green/white</li>
        <li>green</li>
        <li>green/black</li>
        <li>blue [a]</li>
        <li>purple [a]</li>
        <li>brown [a]</li>
        <li>black [a]</li>
      </ul>

      <h2>Attendance log</h2>
      <dl>
        <dt>total</dt>
        <dd>number</dd>
        <dt>since_last_stripe</dt>
        <dd>number</dd>
        <dt>since_last_belt</dt>
        <dd>number</dd>
      </dl>
    </div>
  );
};

export default Profile;
