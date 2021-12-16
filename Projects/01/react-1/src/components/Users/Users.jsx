import React from "react";
import s from "./Users.module.css";
import usersPhoto from "../../Img/images.jpg";
import { NavLink } from "react-router-dom";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((p) => {
        return (
          <span
            className={props.currentPage === p && s.selectedPage}
            onClick={(e) => {
              props.onPagesChanged(p);
            }}
          >
            {p}
          </span>
        );
      })}
      {props.users.map((u) => (
        <div className={s.user} key={u.id}>
          <div>
            <NavLink to={"/profile/" + u.id}>
              <img
                className={s.avatar}
                src={u.photos.small != null ? u.photos.small : usersPhoto}
              ></img>
            </NavLink>
            {u.followed ? (
              <button
                onClick={() => {
                  props.unfollow(u.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                onClick={() => {
                  props.follow(u.id);
                }}
              >
                Follow
              </button>
            )}
          </div>
          <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </span>

          <div>
            <div>{"u.location.country"}</div>

            <div>{"u.location.city"}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
