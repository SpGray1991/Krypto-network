import React from "react";
import style from "./User.module.css";
import usersPhoto from "../../../Img/images.jpg";
import { NavLink } from "react-router-dom";

let User = ({ user, followingInProgress, unfollow, follow }) => {
  return (
    <div className={style.user}>
      <div>
        <NavLink to={"/profile/" + user.id}>
          <img
            className={style.avatar}
            src={user.photos.small != null ? user.photos.small : usersPhoto}
          ></img>
        </NavLink>
      </div>
      <div className={style.aboutUser}>
        <div>{user.name}</div>
        <div className={style.status}>Status : {user.status}</div>
        <div className={style.follow}>
          {user.followed ? (
            <button
              className={style.btn}
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                unfollow(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              className={style.btn}
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                follow(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default User;
