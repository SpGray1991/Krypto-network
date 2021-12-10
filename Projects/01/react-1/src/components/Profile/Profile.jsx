import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
import ProfileUser from "./ProfileUser/ProfileUser";

const Profile = (props) => {
  return (
    <div>
      <ProfileUser />
      <MyPostsContainer
      /* store={props.store} */
      /* posts={props.state.posts}
        postText={props.state.newPostText}
        dispatch={props.dispatch} */
      />
    </div>
  );
};

export default Profile;
