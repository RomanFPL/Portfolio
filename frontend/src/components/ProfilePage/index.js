import { useContext } from "react"
import { AppContext } from "../AppContext";

const ProfilePage = () => {
    const context = useContext(AppContext);
    console.log(context)
  return (
    <div>Profile</div>
  )
}

export default ProfilePage