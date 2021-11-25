import s from "./Post.module.css";

const Post = () => {
  return (
    <div className={s.item}>
      <img
        className={s.avatar}
        src="https://vjoy.cc/wp-content/uploads/2020/12/1133ea1de4e69bd760056f2c04e90920.png"
      ></img>
      Hey, why nobody love me?
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
