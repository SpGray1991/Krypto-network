import style from "./Post.module.css";

const Post = (props) => {
  let deletePost = () => {
    props.deletePost(props.postId);
  };

  return (
    <div className={style.posts}>
      <div className={style.likePlace}>
        <img
          className={style.avatar}
          src="https://vjoy.cc/wp-content/uploads/2020/12/1133ea1de4e69bd760056f2c04e90920.png"
        ></img>
        <span className={style.like}>{props.like} like</span>
        <div>
          <button className={style.btn} onClick={deletePost}>
            delete post
          </button>
        </div>
      </div>

      <div className={style.item}>{props.message}</div>
    </div>
  );
};

export default Post;
