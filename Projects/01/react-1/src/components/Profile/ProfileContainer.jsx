import React from "react";
import { connect } from "react-redux";
import {
  getUserId,
  getUserStatus,
  updateStatus,
  savePhoto,
  saveProfile,
} from "../../Redux/profile-reducer";
import { useMatch } from "react-router-dom";
import Profile from "./Profile";
import withAuthRedirect from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId =
      this.props.match &&
      this.props.match.params &&
      this.props.match.params.userId;

    if (!userId) {
      userId = this.props.id;
    }

    this.props.getUserId(userId);
    this.props.getUserStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.match &&
      this.props.match.params.userId !== prevProps.match.params.userId
    ) {
      this.refreshProfile();
    } else if (!this.props.match && this.props.match !== prevProps.match) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <div>
        <Profile
          {...this.props}
          isOwner={!(this.props.match && this.props.match.params.userId)}
          profile={this.props.profile}
          isAuth={this.props.isAuth}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
          savePhoto={this.props.savePhoto}
          saveProfile={this.props.saveProfile}
          profileUpdateStatus={this.props.profileUpdateStatus}
        />
      </div>
    );
  }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

const ProfileURLMatch = (props) => {
  const match = useMatch("/profile/:userId");
  return <AuthRedirectComponent {...props} match={match} />;
};

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  id: state.auth.id,
  profileUpdateStatus: state.profilePage.profileUpdateStatus,
});

export default connect(mapStateToProps, {
  getUserId,
  getUserStatus,
  updateStatus,
  savePhoto,
  saveProfile,
})(ProfileURLMatch);

/* export default compose(
  connect(mapStateToProps, {
    getUserId,
  }),
  withAuthRedirect
)(ProfileContainer); */
