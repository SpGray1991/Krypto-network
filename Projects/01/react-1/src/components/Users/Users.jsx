import React from "react";
import s from "./Users.module.css";
import usersPhoto from "../../Img/images.jpg";
import { NavLink } from "react-router-dom";
import axios from "axios";

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
                  axios
                    .delete(
                      `https://social-network.samuraijs.com/api/1.0//follow/${u.id}`,
                      {
                        withCredentials: true,
                        headers: {
                          "API-KEY": "0a339568-ca8f-4e77-b590-e17d2ad725d8",
                        },
                      }
                    )
                    .then((response) => {
                      if (response.data.resultCode === 0) {
                        props.unfollow(u.id);
                      }
                    });
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                onClick={() => {
                  axios
                    .post(
                      `https://social-network.samuraijs.com/api/1.0//follow/${u.id}`,
                      {},
                      {
                        withCredentials: true,
                        headers: {
                          "API-KEY": "0a339568-ca8f-4e77-b590-e17d2ad725d8",
                        },
                      }
                    )
                    .then((response) => {
                      if (response.data.resultCode === 0) {
                        props.follow(u.id);
                      }
                    });
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
