import React from "react";
import s from "./Users.module.css";

let Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        follow: false,
        photoUrl:
          "https://gtavrl.ru/public/a15-krasivaya-muzhskaya-avatarka.jpg",
        fullName: "Sergey",
        status: "I am a boss",
        location: { city: "Zaporizhzhia", country: "Ukraine" },
      },
      {
        id: 2,
        follow: false,
        photoUrl: "https://gtavrl.ru/public/poscreenra.jpg",
        fullName: "Aleksandr",
        status: "I am the boss brother",
        location: { city: "Zielona Gura", country: "Poland" },
      },
      {
        id: 3,
        follow: false,
        photoUrl: "https://gtavrl.ru/public/fscreenshot-zd.jpg",
        fullName: "Dimon",
        status: "I am the boss friend",
        location: { city: "Zaporizhzhia", country: "Ukraine" },
      },
    ]);
  }

  return (
    <div>
      {props.users.map((u) => (
        <div className={s.user} key={u.id}>
          <div>
            <img className={s.avatar} src={u.photoUrl}></img>
            {u.follow ? (
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
            <div>{u.fullName}</div>
            <div>{u.status}</div>
          </span>

          <div>
            <div>{u.location.country}</div>

            <div>{u.location.city}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
