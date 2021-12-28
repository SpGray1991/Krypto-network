import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileUser from "./ProfileUser/ProfileUser";

const Profile = (props) => {
  return (
    <div>
      <ProfileUser
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
