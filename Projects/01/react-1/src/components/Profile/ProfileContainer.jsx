import React from "react";
import { connect } from "react-redux";
import { getUserId } from "../../Redux/profile-reducer";
import { useMatch } from "react-router-dom";
import Profile from "./Profile";
import withAuthRedirect from "../../hoc/withAuthRedirect";
class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getUserId(this.props.match);
  }

  render() {
    return (
      <div>
        <Profile
          {...this.props}
          profile={this.props.profile}
          isAuth={this.props.isAuth}
        />
      </div>
    );
  }
}

const ProfileURLMatch = (props) => {
  const match = useMatch("/profile/:userId");
  return <AuthRedirectComponent {...props} match={match} />;
};

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { getUserId })(ProfileURLMatch);
