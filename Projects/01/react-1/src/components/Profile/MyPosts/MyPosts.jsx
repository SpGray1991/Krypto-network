import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../Redux/state";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.state.map((p) => (
    <Post message={p.message} like={p.like} />
  ));

  let newPostElement = React.useRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let handleSubmit = (e) => {
    e.preventDefault();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
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
