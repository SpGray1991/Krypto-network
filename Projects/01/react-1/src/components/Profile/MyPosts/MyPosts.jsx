import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.state.map((p) => (
    <Post message={p.message} like={p.like} />
  ));

  return (
    <>
      <form>
        <label className={s.post} for="content">
          My posts
        </label>
        <textarea></textarea>
        <button className={s.btn} type="submit">
          Add post
        </button>
      </form>
      <div className={s.posts}>{postsElements}</div>
    </>
  );
};

export default MyPosts;
