import React from "react";
import { connect } from "react-redux";
import { setUserProfile } from "../../Redux/profile-reducer";
import { useMatch } from "react-router-dom";
import { userAPI } from "../../api/api";

import Profile from "./Profile";
class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId =
      this.props.match &&
      this.props.match.params &&
      this.props.match.params.userId;

    if (!userId) {
      userId = 21326;
    }

    userAPI.getUserId(userId).then((data) => {
      this.props.setUserProfile(data);
    });
  }

  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

const ProfileURLMatch = (props) => {
  const match = useMatch("/profile/:userId");
  return <ProfileContainer {...props} match={match} />;
};

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { setUserProfile })(ProfileURLMatch);
