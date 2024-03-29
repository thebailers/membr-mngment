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
        <dt>membership_tier</dt>
        <dd>[membership-tiers]</dd>
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
        <li>grey/white [kids only]</li>
        <li>grey [kids only]</li>
        <li>grey/black [kids only]</li>
        <li>yellow/white [kids only]</li>
        <li>yellow [kids only]</li>
        <li>yellow/black [kids only]</li>
        <li>orange/white [kids only]</li>
        <li>orange [kids only]</li>
        <li>orange/black [kids only]</li>
        <li>green/white [kids only]</li>
        <li>green [kids only]</li>
        <li>green/black [kids only]</li>
        <li>blue [adults only]</li>
        <li>purple [adults only]</li>
        <li>brown [adults only]</li>
        <li>black [adults only]</li>
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

      <h2>Membership tiers</h2>
      <dl>
        <dt>tier 1</dt>
        <dd>number</dd>
        <dt>tier 3</dt>
        <dd>number</dd>
        <dt>pay as you go</dt>
        <dd>session fee</dd>
      </dl>
    </div>
  );
};

export default Profile;
