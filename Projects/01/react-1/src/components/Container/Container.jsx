import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";
import s from "../Container/Container.module.css";
import { Routes, Route } from "react-router-dom";

const Container = () => {
  return (
    <container className={s.container}>
      <Navbar />
      <content className={s.content}>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/dialogs" element={<Dialogs />} />
        </Routes>

        {/*  <Route path='/dialogs' component={Dialogs}/>
      <Route path='/profile' component={Profile}/> */}
      </content>
    </container>
  );
};

export default Container;
