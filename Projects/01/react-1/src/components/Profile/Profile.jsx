import MyPosts from "./MyPosts/MyPosts";
import Post from "./MyPosts/Post/Post";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <div className={s.bg_top}></div>
      <img className={s.avatar} src="https://a.d-cd.net/7f09b9s-480.jpg"></img>
      <div className={s.about_user}>
        <h1 className={s.title}>Sergey Spitsa</h1>
        <p>Date of birthday: 18 july </p>
        <p>City: Zaporizhzhia </p>
        <p>Education: ZNTU </p>
        <p>Web-site: https://kinopoisk.ru </p>
      </div>
      <MyPosts />
      <div className={s.posts}>
        <Post message="Hi, how are you?" like="300" />
        <Post message="I'm fine!" like="350" />
      </div>
    </div>
  );
};

export default Profile;
