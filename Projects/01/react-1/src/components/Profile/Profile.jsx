import MyPosts from "./MyPosts/MyPosts";
import Post from "./MyPosts/Post/Post";
import s from "./Profile.module.css";
import ProfileUser from "./ProfileUser/ProfileUser";

const Profile = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} like={p.like} />
  ));

  return (
    <div>
      <ProfileUser />
      <MyPosts />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default Profile;
