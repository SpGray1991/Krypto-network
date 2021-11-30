import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileUser from "./ProfileUser/ProfileUser";

const Profile = (props) => {
  return (
    <div>
      <ProfileUser />
      <MyPosts posts={props.posts} />
    </div>
  );
};

export default Profile;
