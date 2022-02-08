import React, { Suspense } from "react";
import style from "../Container/Container.module.css";
import { Routes, Route } from "react-router-dom";
import NavbarContainer from "../Navbar/NavbarContainer";
import UsersContainer from "../Users/UsersContainer";
import Login from "../Login/Login";
import Preloader from "../Common/Preloader/Preloader";

const DialogsContainer = React.lazy(() =>
  import("../Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
  import("../Profile/ProfileContainer")
);

const Container = () => {
  return (
    <container className={style.container}>
      <NavbarContainer />
      <content className={style.content}>
        <Suspense fallback={<Preloader />}>
          <Routes>
            <Route path="/profile/*" element={<ProfileContainer />} />
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/users/*" element={<UsersContainer />} />
            <Route path="/login/*" element={<Login />} />
          </Routes>
        </Suspense>
      </content>
    </container>
  );
};

export default Container;
