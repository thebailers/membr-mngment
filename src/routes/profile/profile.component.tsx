import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";

const Profile = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <div>
      <h1>{currentUser!.displayName}</h1>
    </div>
  );
};

export default Profile;
