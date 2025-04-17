import { useParams } from "react-router-dom";
import DefaultProfile from "./DefaultProfile";
import Spinach from "./Spinach";
import Popeye from "./Popeye";
import Olive from "./Olive";
import DonkeyKong from "./DonkeyKong";
import Mario from "./Mario";

const Profile = () => {
  const { name } = useParams();

  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
      <hr />
      <h2>The profile visited is here:</h2>
      {name === "popeye" ? (
        <Popeye />
      ) : name === "spinach" ? (
        <Spinach />
      ) : name === "olive" ? (
        <Olive />
      ) : name === "donkeykong" ? (
        <DonkeyKong />
      ) : name === "mario" ? (
        <Mario />
      ) : (
        <DefaultProfile />
      )}
    </div>
  );
};

export default Profile;
