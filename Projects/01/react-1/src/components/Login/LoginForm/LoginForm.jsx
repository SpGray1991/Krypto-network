import { Formik, Field } from "formik";
import * as yup from "yup";
import style from "./LoginForm.module.css";

const LoginForm = (props) => {
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .typeError("Должно быть строкой")
      .required("Заполните это поле"),
    password: yup
      .string()
      .typeError("Должно быть строкой")
      .required("Заполните это поле"),
  });

  return (
    <div className={style.transparent}>
      <Formik
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
            <label className={style.post} htmlFor="email">
              Login
            </label>
            <input
              className={style.input}
              type={"email"}
              name={"email"}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            ></input>
            {touched.email && errors.email && (
              <p className={style.error}>{errors.email}</p>
            )}
            <label className={style.post} htmlFor="password">
              Password
            </label>
            <input
              className={style.input}
              type={"text"}
              name={"password"}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            ></input>
            {touched.password && errors.password && (
              <p className={style.error}>{errors.password}</p>
            )}
            <label className={style.post}>
              <Field type="checkbox" name="rememberMe" />
              <span className={style.checkboxName}>Remember Me</span>
            </label>
            <button
              disabled={!isValid && !dirty}
              onClick={handleSubmit}
              className={style.btn}
              type={"submit"}
            >
              LogIn
            </button>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
