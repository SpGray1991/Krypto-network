import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileUser from "./ProfileUser/ProfileUser";

const Profile = (props) => {
  return (
    <div>
      <ProfileUser profile={props.profile} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
