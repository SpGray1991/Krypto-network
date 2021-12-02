import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.state.map((p) => (
    <Post message={p.message} like={p.like} />
  ));

  let newPostElement = React.useRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    props.updateNewPostText("");
  };

  let handleSubmit = (e) => {
    e.preventDefault();
  };

  /* const onPostChange = (event) => {
    props.updateNewPostText(event.target.value);
  }; */

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
        <button onClick={addPost} className={s.btn} type="submit">
          Add post
        </button>
      </form>
      <div className={s.posts}>{postsElements}</div>
    </>
  );
};

export default MyPosts;
