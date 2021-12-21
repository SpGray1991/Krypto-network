/* import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../Redux/profile-reducer";

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/profile/2")
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer); */

import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../Redux/profile-reducer";
import { useMatch } from "react-router-dom";

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

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then(({ data }) => {
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
