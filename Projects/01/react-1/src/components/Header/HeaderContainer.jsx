import React from "react";
import { connect } from "react-redux";
import { setUserData } from "../../Redux/auth-reducer";
import Header from "./Header";
import { userAPI } from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    userAPI.getAuth().then((data) => {
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        this.props.setUserData(id, email, login);
      }
    });
  }

  render() {
    return (
      <div>
        <Header {...this.props} />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { setUserData })(HeaderContainer);
