import { connect } from "react-redux";
import {
  toggleFetching,
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  unfollow,
  toggleFollowingProgress,
} from "../../Redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "./Preloader/Preloader";
import { userAPI } from "../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleFetching(true);
    userAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.toggleFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      })
      .catch(() => {
        this.props.toggleFetching(true);
      });
  }

  onPagesChanged = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    this.props.toggleFetching(true);
    userAPI
      .getUsers(currentPage, this.props.pageSize)
      .then((data) => {
        this.props.toggleFetching(false);
        this.props.setUsers(data.items);
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
          followingInProgress={this.props.followingInProgress}
          toggleFollowingProgress={this.props.toggleFollowingProgress}
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
    followingInProgress: state.userPage.followingInProgress,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleFetching,
  toggleFollowingProgress,
})(UsersContainer);
