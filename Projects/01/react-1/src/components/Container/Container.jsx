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
            element={
              <Profile
                store={props.store}
                /* state={props.state.profilePage} */
                dispatch={props.dispatch}
              />
            }
          />
          <Route
            path="/dialogs/*"
            element={
              <Dialogs
                state={props.state.dialogPage}
                dispatch={props.dispatch}
                state2={props.state.profilePage}
              />
            }
          />
        </Routes>
      </content>
    </container>
  );
};

export default Container;
