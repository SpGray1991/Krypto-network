import { connect } from "react-redux";
import { followAC, setUsersAc, unfollowAC } from "../../Redux/users-reducer";
import Users from "./Users";

let mapStateToProps = (state) => {
  return {
    users: state.userPage.users,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAc(users));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
