import Navbar from "../Navbar/Navbar";
// import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";
import s from "../Container/Container.module.css";

const Container = () => {
  return (
    <container className={s.container}>
      <Navbar />
    <content className={s.content}>
      <Dialogs />
      {/* <Profile /> */}
    </content>
    </container>
  );
};

export default Container;
