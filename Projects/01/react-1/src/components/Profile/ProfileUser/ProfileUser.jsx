import { useState } from "react";
import style from "./ProfileUser.module.css";
import Preloader from "../../Common/Preloader/Preloader";
import usersPhoto from "../../../Img/images.jpg";
import changeFoto from "../../../Img/232-wink.svg";
import ProfileDataForm from "./ProfileForm/ProfileDataForm";
import ProfileData from "./ProfileData/ProfileData";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

const ProfileUser = (props) => {
  let [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Preloader />;
  }

  const loadAvatar = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  return (
    <>
      <div className={style.bg_top}></div>
      <div className={style.profile}>
        <div className={style.wrapper_foto}>
          <img
            className={style.avatar}
            src={
              props.profile.photos.small != null
                ? props.profile.photos.small
                : usersPhoto
            }
          />
          <div>
            {props.isOwner && (
              <div className={style.input_wrapper}>
                <input
                  type="file"
                  name="file"
                  id="input__file"
                  className={style.input__file}
                  onChange={loadAvatar}
                  multiple
                ></input>
                <label for="input__file" className={style.input__file_button}>
                  <span className={style.input__file_icon_wrapper}>
                    <img
                      className={style.input__file_icon}
                      src={changeFoto}
                      alt="Выбрать файл"
                      width="25"
                    ></img>
                  </span>
                  <span className={style.input__file_button_text}>
                    Выберите фото
                  </span>
                </label>
              </div>
            )}
          </div>
          <ProfileStatusWithHooks
            status={props.status}
            updateStatus={props.updateStatus}
          />
        </div>

        <div>
          {editMode ? (
            <ProfileDataForm
              saveProfile={props.saveProfile}
              profile={props.profile}
              setEditMode={setEditMode}
              profileUpdateStatus={props.profileUpdateStatus}
              goToEditMode={() => {
                setEditMode(false);
              }}
            />
          ) : (
            <ProfileData
              profile={props.profile}
              status={props.status}
              updateStatus={props.updateStatus}
              isOwner={props.isOwner}
              goToEditMode={() => {
                setEditMode(true);
              }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ProfileUser;
