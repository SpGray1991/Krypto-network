import Profile from "../Profile/Profile";

import s from "../Container/Container.module.css";
import { Routes, Route } from "react-router-dom";
import DialogsContainer from "../Dialogs/DialogsContainer";
import NavbarContainer from "../Navbar/NavbarContainer";
import UsersContainer from "../Users/UsersContainer";

const Container = () => {
  return (
    <container className={s.container}>
      <NavbarContainer />
      <content className={s.content}>
        <Routes>
          <Route path="/profile/*" element={<Profile />} />
          <Route path="/dialogs/*" element={<DialogsContainer />} />
          <Route path="/users/*" element={<UsersContainer />} />
        </Routes>
      </content>
    </container>
  );
};

export default Container;
