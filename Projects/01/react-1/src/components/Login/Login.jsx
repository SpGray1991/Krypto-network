import { loginThunkCreator } from "../../Redux/auth-reducer";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import LoginForm from "./LoginForm/LoginForm";

const Login = (props) => {
  if (props.isAuth) {
    return <Navigate to="/profile/" />;
  }
  return (
    <div>
      <LoginForm login={props.loginThunkCreator} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, {
  loginThunkCreator,
})(Login);
