import Profile from "../Profile/Profile";

import s from "../Container/Container.module.css";
import { Routes, Route } from "react-router-dom";
import DialogsContainer from "../Dialogs/DialogsContainer";
import NavbarContainer from "../Navbar/NavbarContainer";

const Container = () => {
  return (
    <container className={s.container}>
      <NavbarContainer /* state={props.state.dialogPage} */ />
      <content className={s.content}>
        <Routes>
          <Route
            path="/profile/*"
            element={<Profile /* store={props.store} */ />}
          />
          <Route
            path="/dialogs/*"
            element={<DialogsContainer /* store={props.store} */ />}
          />
        </Routes>
      </content>
    </container>
  );
};

export default Container;
