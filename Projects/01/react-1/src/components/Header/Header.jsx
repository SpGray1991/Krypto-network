import { NavLink } from "react-router-dom";
import style from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={style.header}>
      <img src="https://cdn-icons-png.flaticon.com/512/1213/1213973.png"></img>
      <div>
        {props.isAuth ? (
          <div className={style.userLogin}>
            <div className={style.userName}>{props.login}</div>
            <button className={style.btn} onClick={props.logout}>
              Exit
            </button>
          </div>
        ) : (
          <NavLink to="/login" className={`${style.btn} ${style.login}`}>
            Login
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
