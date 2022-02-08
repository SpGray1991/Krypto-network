import { addPost, deletePost } from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    postId: state.profilePage.posts.id,
  };
};

const MyPostsContainer = connect(mapStateToProps, { addPost, deletePost })(
  MyPosts
);

export default MyPostsContainer;
