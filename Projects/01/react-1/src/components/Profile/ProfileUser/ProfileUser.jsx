import { useState } from "react";
import s from "./ProfileUser.module.css";
import Preloader from "../../Common/Preloader/Preloader";
import usersPhoto from "../../../Img/images.jpg";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import { Formik, Field } from "formik";
import * as yup from "yup";

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
      <div className={s.bg_top}></div>
      <img
        className={s.avatar}
        src={
          props.profile.photos.small != null
            ? props.profile.photos.small
            : usersPhoto
        }
      />
      <div>
        {props.isOwner && <input type={"file"} onChange={loadAvatar} />}
      </div>
      {editMode ? (
        <ProfileDataForm
          saveProfile={props.saveProfile}
          profile={props.profile}
          setEditMode={setEditMode}
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
    </>
  );
};

const Contact = ({ contactTitle }, { contactValue }) => {
  return (
    <div>
      <b>{contactTitle}</b> : {contactValue}
    </div>
  );
};

const ProfileData = (props) => {
  return (
    <div className={s.about_user}>
      {props.isOwner && (
        <div>
          <button onClick={props.goToEditMode}>edit</button>
        </div>
      )}
      <h1 className={s.title}>{props.profile.fullName}</h1>
      <ProfileStatusWithHooks
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <b>LookingForAJob</b> : {props.profile.lookingForAJob ? "Yes" : "No"}
      {props.profile.lookingForAJob && (
        <div>
          <b>My Professional skills</b> :
          {props.profile.lookingForAJobDescription}
        </div>
      )}
      <p>
        <b>About Me</b> : {props.profile.aboutMe}
      </p>
      <p>
        <b>Contacts</b> :
        {Object.keys(props.profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={props.profile.contacts[key]}
            />
          );
        })}
      </p>
    </div>
  );
};

const ProfileDataForm = (props) => {
  /* const validationSchema = yup.object().shape({
    fullName: yup
      .string()
      .typeError("Должно быть строкой")
      .required("Обязательно"),
    password: yup
      .string()
      .typeError("Должно быть строкой")
      .required("Обязательно"),
  }); */

  return (
    <div>
      <Formik
        initialValues={{
          fullName: props.profile.fullName,
          lookingForAJob: props.profile.lookingForAJob,
          lookingForAJobDescription: props.profile.lookingForAJobDescription,
          aboutMe: props.profile.aboutMe,
          /* contacts: {},
          github: "",
          vk: "",
          facebook: "",
          instagram: "",
          twitter: "",
          website: "",
          youtube: "",
          mainLink: "", */
        }}
        validateOnBlur
        onSubmit={(values /* { setSubmitting, setStatus } */) => {
          console.log(values);
          props.saveProfile(
            values
            /* values.fullName,
            values.lookingForAJob,
            values.lookingForAJobDescription,
            values.aboutMe */
            /*  setStatus */
          );
          props.setEditMode(false);
          /* setSubmitting(false); */
        }}
        /*   validationSchema={validationSchema} */
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
          /*  status, */
        }) => (
          <div>
            {/*  {status} */}
            <label className={s.post} htmlFor="fullName">
              <b>Full Name</b>
            </label>
            <input
              className={s.input}
              type={"text"}
              name={"fullName"}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.fullName}
            ></input>
            {touched.fullName && errors.fullName && (
              <p className={s.error}>{errors.fullName}</p>
            )}
            <label>
              <Field type="checkbox" name="lookingForAJob" />
              <b>LookingForAJob</b>
            </label>
            <label className={s.post} htmlFor="lookingForAJobDescription">
              <b>My Professional Skills</b>
            </label>
            <textarea
              className={s.input}
              type={"text"}
              name={"lookingForAJobDescription"}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lookingForAJobDescription}
            ></textarea>
            {touched.lookingForAJobDescription &&
              errors.lookingForAJobDescription && (
                <p className={s.error}>{errors.lookingForAJobDescription}</p>
              )}
            <label className={s.post} htmlFor="aboutMe">
              <b>About Me</b>
            </label>
            <textarea
              className={s.input}
              type={"text"}
              name={"aboutMe"}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.aboutMe}
            ></textarea>
            {touched.aboutMe && errors.aboutMe && (
              <p className={s.error}>{errors.aboutMe}</p>
            )}

            <button
              disabled={!isValid && !dirty}
              onClick={handleSubmit}
              className={s.btn}
              type={"submit"}
            >
              Save
            </button>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default ProfileUser;
