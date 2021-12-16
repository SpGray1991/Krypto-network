import s from "./ProfileUser.module.css";
import usersPhoto from "../../../Img/images.jpg";
import Preloader from "../../Users/Preloader/Preloader";

const ProfileUser = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <>
      <div className={s.bg_top}></div>
      <img className={s.avatar} src={props.profile.photos.small} />
      <div className={s.about_user}>
        <h1 className={s.title}>
          {props.profile.fullName} {props.profile.aboutMe}
        </h1>
        <p>Date of birthday: 18 july </p>
        <p>City: Zaporizhzhia </p>
        <p>Education: ZNTU </p>
        <p>
          Web-site:
          {props.profile.contacts.facebook}
        </p>
      </div>
    </>
  );
};

export default ProfileUser;
