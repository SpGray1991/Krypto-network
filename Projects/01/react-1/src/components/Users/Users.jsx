import axios from "axios";
import React from "react";
import s from "./Users.module.css";
import usersPhoto from "../../Img/images.jpg";

class Users extends React.Component {
  constructor(props) {
    super(props);
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return (
      <div>
        {this.props.users.map((u) => (
          <div className={s.user} key={u.id}>
            <div>
              <img
                className={s.avatar}
                src={u.photos.small != null ? u.photos.small : usersPhoto}
              ></img>
              {u.followed ? (
                <button
                  onClick={() => {
                    this.props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    this.props.follow(u.id);
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
  }
}

export default Users;
