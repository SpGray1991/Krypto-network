import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileUser from "./ProfileUser/ProfileUser";

const Profile = (props) => {
  return (
    <div>
      <ProfileUser />
      <MyPosts state={props.state.posts} addPost={props.addPost} />
    </div>
  );
};

export default Profile;
