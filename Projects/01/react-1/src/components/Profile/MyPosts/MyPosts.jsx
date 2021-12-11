import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} like={p.like} /* key={p.id} */ />
  ));

  let newPostElement = React.useRef();

  let onAddPost = () => {
    props.addPost();
  };

  let handleSubmit = (e) => {
    e.preventDefault();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className={s.post} for="content">
          My posts
        </label>
        <textarea
          onChange={onPostChange}
          value={props.postText}
          ref={newPostElement}
        ></textarea>
        <button onClick={onAddPost} className={s.btn} type="submit">
          Add post
        </button>
      </form>
      <div className={s.posts}>{postsElements}</div>
    </>
  );
};

export default MyPosts;
