import React from "react";
import AddPostForm from "./AddPostForm/AddPostForm";
import Post from "./Post/Post";

const MyPosts = React.memo((props) => {
  let postsElements = props.posts.map((p) => (
    <Post
      message={p.message}
      like={p.like}
      postId={p.id}
      key={p.id}
      deletePost={props.deletePost}
    ></Post>
  ));

  return (
    <>
      <AddPostForm addPost={props.addPost} />
      <div>{postsElements}</div>
    </>
  );
});

export default MyPosts;
