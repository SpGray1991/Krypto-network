import React from "react";
import { connect } from "react-redux";
import "./App.css";
import { initializedApp } from "./Redux/app-reducer";
import Container from "./components/Container/Container";
import HeaderContainer from "./components/Header/HeaderContainer";
import Preloader from "../src/components/Common/Preloader/Preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initializedApp();
  }
  render() {
    if (!this.props.initialised) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Container />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialised: state.app.initialised,
  };
};

export default connect(mapStateToProps, { initializedApp })(App);
