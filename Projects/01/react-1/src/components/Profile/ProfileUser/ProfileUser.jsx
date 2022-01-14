import { useState } from "react";
import s from "./ProfileUser.module.css";
import Preloader from "../../Common/Preloader/Preloader";
import usersPhoto from "../../../Img/images.jpg";
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
        <ProfileDataForm />
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
    email: yup
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
      {" "}
      Form
      {/* <Formik
        initialValues={{
          email: "",
          password: "",
          rememberMe: "",
        }}
        validateOnBlur
        onSubmit={(values, { setSubmitting, setStatus }) => {
          console.log(values);
          props.login(
            values.email,
            values.password,
            values.rememberMe,
            setStatus
          );
          setSubmitting(false);
        }}
        validationSchema={validationSchema}
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
          status,
        }) => (
          <div>
            {status}
            <label className={s.post} htmlFor="email">
              Login
            </label>
            <input
              className={s.input}
              type={"email"}
              name={"email"}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            ></input>
            {touched.email && errors.email && (
              <p className={s.error}>{errors.email}</p>
            )}
            <label className={s.post} htmlFor="password">
              Password
            </label>
            <input
              className={s.input}
              type={"text"}
              name={"password"}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            ></input>
            {touched.password && errors.password && (
              <p className={s.error}>{errors.password}</p>
            )}
            <label>
              <Field type="checkbox" name="rememberMe" />
              Remember Me
            </label>
            <button
              disabled={!isValid && !dirty}
              onClick={handleSubmit}
              className={s.btn}
              type={"submit"}
            >
              LogIn
            </button>
          </div>
        )}
      </Formik> */}
    </div>
  );
};

export default ProfileUser;
