import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
import ProfileUser from "./ProfileUser/ProfileUser";

const Profile = () => {
  return (
    <div>
      <ProfileUser />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
