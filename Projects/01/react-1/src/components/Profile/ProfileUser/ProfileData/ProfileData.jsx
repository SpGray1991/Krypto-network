import Contact from "../Contact/Contact";
import style from "./ProfileData.module.css";

const ProfileData = (props) => {
  return (
    <div className={style.about_user}>
      <h1 className={style.title}>{props.profile.fullName}</h1>
      <div className={style.wrapper}>
        <p className={style.fieldProfile}>
          Looking For A Job :{" "}
          <span className={style.answer}>
            {props.profile.lookingForAJob ? "Yes" : "No"}
          </span>
        </p>
        {props.profile.lookingForAJob && (
          <div>
            <p className={style.fieldProfile}>
              My Professional skills :{" "}
              <span className={style.answer}>
                {props.profile.lookingForAJobDescription}
              </span>
            </p>
          </div>
        )}
      </div>
      <p className={style.fieldProfile}>
        About Me :<span className={style.answer}>{props.profile.aboutMe}</span>
      </p>
      <p className={style.fieldProfile}>Contacts :</p>
      {Object.entries(props.profile.contacts).map(([key, value]) => {
        return (
          <Contact
            key={key}
            contactTitle={`${key}`}
            contactValue={`${value}`}
          />
        );
      })}
      {props.isOwner && (
        <div>
          <button className={style.profileButton} onClick={props.goToEditMode}>
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileData;
