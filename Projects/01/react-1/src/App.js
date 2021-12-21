import "./App.css";

import Container from "./components/Container/Container";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Container
      /* state={props.state}
        dispatch={props.dispatch}
        store={props.store} */
      />
    </div>
  );
};

export default App;
