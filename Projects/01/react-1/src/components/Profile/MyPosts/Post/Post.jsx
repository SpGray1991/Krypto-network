import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        className={s.avatar}
        src="https://vjoy.cc/wp-content/uploads/2020/12/1133ea1de4e69bd760056f2c04e90920.png"
      ></img>
      {props.message}
      <div>
        <span>{props.like} like</span>
      </div>
    </div>
  );
};

export default Post;
