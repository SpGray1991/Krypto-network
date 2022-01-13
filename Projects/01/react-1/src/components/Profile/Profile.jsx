import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileUser from "./ProfileUser/ProfileUser";

const Profile = (props) => {
  /* if (!props.isAuth) {
    return <Login />;
  } */
  return (
    <div>
      <ProfileUser
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        isOwner={props.isOwner}
        savePhoto={props.savePhoto}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
