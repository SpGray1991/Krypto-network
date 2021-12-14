import axios from "axios";
import React from "react";
import s from "./Users.module.css";
import usersPhoto from "../../Img/images.jpg";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPagesChanged = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return (
      <div>
        {pages.map((p) => {
          return (
            <span
              className={this.props.currentPage === p && s.selectedPage}
              onClick={(e) => {
                this.onPagesChanged(p);
                /* this.props.setCurrentPage(p); */
              }}
            >
              {p}
            </span>
          );
        })}
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
