import "./App.css";
import Header from "./components/Header/Header";
import Container from "./components/Container/Container";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Container />
    </div>
    </BrowserRouter>
  );
};

export default App;
