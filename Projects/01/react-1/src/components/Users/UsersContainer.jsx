import { connect } from "react-redux";
import {
  toggleFetching,
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  unfollow,
} from "../../Redux/users-reducer";
import React from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "./Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      })
      .catch(() => {
        this.props.toggleFetching(true);
      });
  }

  onPagesChanged = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    this.props.toggleFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleFetching(false);
        this.props.setUsers(response.data.items);
      })
      .catch(() => {
        this.props.toggleFetching(true);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}

        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPagesChanged={this.onPagesChanged}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.userPage.users,
    pageSize: state.userPage.pageSize,
    totalUsersCount: state.userPage.totalUsersCount,
    currentPage: state.userPage.currentPage,
    isFetching: state.userPage.isFetching,
  };
};

/* let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(follow(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollow(userId));
    },
    setUsers: (users) => {
      dispatch(setUsers(users));
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPage(currentPage));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCount(totalCount));
    },
    toggleFetching: (fetching) => {
      dispatch(toggleFetching(fetching));
    },
  };
}; */

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleFetching,
})(UsersContainer);
