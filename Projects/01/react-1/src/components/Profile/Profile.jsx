import MyPosts from "./MyPosts/MyPosts";
import Post from "./MyPosts/Post/Post";
import s from "./Profile.module.css";
import ProfileUser from "./ProfileUser/ProfileUser";

const Profile = () => {
  let posts = [
    { id: 1, message: "Hi", like: 300 },
    { id: 2, message: "How are you?", like: 350 },
    { id: 3, message: "i'm fine!" },
    { id: 4, message: "" },
  ];

  let postsElements = posts.map((p) => (
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
