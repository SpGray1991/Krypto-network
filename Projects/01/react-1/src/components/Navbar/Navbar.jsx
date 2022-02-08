import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={style.nav}>
      <div className={style.item}>
        <NavLink
          to="/profile"
          className={(navData) =>
            navData.isActive ? style.active : style.item
          }
        >
          Profile
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink
          to="/dialogs"
          className={(navData) =>
            navData.isActive ? style.active : style.item
          }
        >
          Messages
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink
          to="/users"
          className={(navData) =>
            navData.isActive ? style.active : style.item
          }
        >
          Users
        </NavLink>
      </div>
      <div className={style.item}>
        <a href="#">News</a>
      </div>
      <div className={style.item}>
        <a href="#">Music</a>
      </div>
      <div className={style.item}>
        <a href="#">Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
