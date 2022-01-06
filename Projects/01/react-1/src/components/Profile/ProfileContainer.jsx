import React from "react";
import { connect } from "react-redux";
import {
  getUserId,
  getUserStatus,
  updateStatus,
} from "../../Redux/profile-reducer";
import { useMatch } from "react-router-dom";
import Profile from "./Profile";
import withAuthRedirect from "../../hoc/withAuthRedirect";
/* import { compose } from "redux"; */
class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getUserId(this.props.match);
    this.props.getUserStatus(this.props.match, this.props.id);
  }

  render() {
    return (
      <div>
        <Profile
          {...this.props}
          profile={this.props.profile}
          isAuth={this.props.isAuth}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
        />
      </div>
    );
  }
}

/* let AuthRedirectComponent = withAuthRedirect(ProfileContainer); */

const ProfileURLMatch = (props) => {
  const match = useMatch("/profile/:userId");
  return <ProfileContainer {...props} match={match} />;
};

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  id: state.auth.id,
});

export default connect(mapStateToProps, {
  getUserId,
  getUserStatus,
  updateStatus,
})(ProfileURLMatch);

/* export default compose(
  connect(mapStateToProps, {
    getUserId,
  }),
  withAuthRedirect
)(ProfileContainer); */
