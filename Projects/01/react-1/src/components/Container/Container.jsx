import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";
import s from "../Container/Container.module.css";
import { Routes, Route } from "react-router-dom";

const Container = (props) => {
  return (
    <container className={s.container}>
      <Navbar state={props.state.dialogPage} />
      <content className={s.content}>
        <Routes>
          <Route
            path="/profile/*"
            element={<Profile state={props.state.profilePage} />}
          />
          <Route
            path="/dialogs/*"
            element={<Dialogs state={props.state.dialogPage} />}
          />
        </Routes>
      </content>
    </container>
  );
};

export default Container;
