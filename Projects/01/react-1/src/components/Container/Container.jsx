import s from "../Container/Container.module.css";
import { Routes, Route } from "react-router-dom";
import DialogsContainer from "../Dialogs/DialogsContainer";
import NavbarContainer from "../Navbar/NavbarContainer";
import UsersContainer from "../Users/UsersContainer";
import ProfileContainer from "../Profile/ProfileContainer";
import LoginPage from "../Login/Login";

const Container = () => {
  return (
    <container className={s.container}>
      <NavbarContainer />
      <content className={s.content}>
        <Routes>
          <Route path="/profile/*" element={<ProfileContainer />} />
          <Route path="/dialogs/*" element={<DialogsContainer />} />
          <Route path="/users/*" element={<UsersContainer />} />
          <Route path="/login/*" element={<LoginPage />} />
        </Routes>
      </content>
    </container>
  );
};

export default Container;
