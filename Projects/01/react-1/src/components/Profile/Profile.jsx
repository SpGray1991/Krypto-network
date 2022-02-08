import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileUser from "./ProfileUser/ProfileUser";

const Profile = (props) => {
  return (
    <div>
      <ProfileUser
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        isOwner={props.isOwner}
        savePhoto={props.savePhoto}
        saveProfile={props.saveProfile}
        profileUpdateStatus={props.profileUpdateStatus}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
