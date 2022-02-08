import { Formik, Field } from "formik";
import style from "./ProfileDataForm.module.css";

const ProfileDataForm = (props) => {
  return (
    <div className={style.transparent}>
      <Formik
        initialValues={{
          fullName: props.profile.fullName,
          lookingForAJob: props.profile.lookingForAJob,
          lookingForAJobDescription: props.profile.lookingForAJobDescription,
          aboutMe: props.profile.aboutMe,
          contacts: {
            facebook: props.profile.contacts.facebook,
            website: props.profile.contacts.website,
            vk: props.profile.contacts.vk,
            twitter: props.profile.contacts.twitter,
            instagram: props.profile.contacts.instagram,
            youtube: props.profile.contacts.youtube,
            github: props.profile.contacts.github,
            mainLink: props.profile.contacts.mainLink,
          },
        }}
        validateOnBlur
        onSubmit={(values, { setStatus }) => {
          props.saveProfile(values, setStatus, props.goToEditMode);
        }}
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
            <div>
              <label className={style.post} htmlFor="fullName">
                <span>Full Name</span>
              </label>
              <input
                className={style.input}
                type={"text"}
                name={"fullName"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fullName}
              ></input>
              {touched.fullName && errors.fullName && (
                <p className={style.error}>{errors.fullName}</p>
              )}
            </div>
            <div>
              <label className={style.post}>
                <Field type="checkbox" name="lookingForAJob" />
                <span className={style.nameCheckbox}>Looking For A Job</span>
              </label>
            </div>

            <div>
              <label className={style.post} htmlFor="lookingForAJobDescription">
                <span>My Professional Skills</span>
              </label>
              <textarea
                className={style.textField}
                type={"text"}
                name={"lookingForAJobDescription"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lookingForAJobDescription}
              ></textarea>
              {touched.lookingForAJobDescription &&
                errors.lookingForAJobDescription && (
                  <p className={style.error}>
                    {errors.lookingForAJobDescription}
                  </p>
                )}
            </div>

            <div>
              <label className={style.post} htmlFor="aboutMe">
                <span>About Me</span>
              </label>
              <textarea
                className={style.textField}
                type={"text"}
                name={"aboutMe"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.aboutMe}
              ></textarea>
              {touched.aboutMe && errors.aboutMe && (
                <p className={style.error}>{errors.aboutMe}</p>
              )}
            </div>

            <div>
              {Object.keys(props.profile.contacts).map((key) => {
                return (
                  <div>
                    <label className={style.post} htmlFor={key}>
                      <span>{key}</span>
                    </label>
                    <input
                      className={style.input}
                      type={"text"}
                      name={"contacts." + key}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.contacts[key]}
                    ></input>
                    {touched.key && errors.key && (
                      <p className={style.error}>{errors.key}</p>
                    )}
                  </div>
                );
              })}
            </div>

            <button
              disabled={!isValid && !dirty}
              onClick={handleSubmit}
              className={style.profileButton}
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

export default ProfileDataForm;
