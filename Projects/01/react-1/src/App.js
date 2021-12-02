import "./App.css";
import Header from "./components/Header/Header";
import Container from "./components/Container/Container";
import { BrowserRouter } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Container state={props.state} addPost={props.addPost} />
      </div>
    </BrowserRouter>
  );
};

export default App;
