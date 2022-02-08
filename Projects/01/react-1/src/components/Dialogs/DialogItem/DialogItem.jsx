import { NavLink } from "react-router-dom";
import style from "./DialogItem.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={style.item}>
      <NavLink to={path}>
        <img
          className={style.avatar}
          src="http://cs622426.vk.me/v622426834/409d/baLqspYwi84.jpg"
        ></img>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
