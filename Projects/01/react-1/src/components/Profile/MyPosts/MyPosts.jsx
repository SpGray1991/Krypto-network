import s from "./MyPosts.module.css";

const MyPosts = () => {
  return (
    <form>
      <label className={s.posts} for="content">
        My posts
      </label>
      <textarea></textarea>
      <button className={s.btn} type="submit">
        Add post
      </button>
    </form>
  );
};

export default MyPosts;
