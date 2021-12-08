import "./App.css";
import Header from "./components/Header/Header";
import Container from "./components/Container/Container";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Container state={props.state} dispatch={props.dispatch} />
    </div>
  );
};

export default App;
