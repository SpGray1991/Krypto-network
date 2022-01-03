import { Formik } from "formik";
import * as yup from "yup";
import s from "./Login.module.css";

const LoginForm = (props) => {
  const validationSchema = yup.object().shape({
    login: yup
      .string()
      .typeError("Должно быть строкой")
      .required("Обязательно"),
  });

  return (
    <div>
      <Formik
        initialValues={{
          login: "",
          password: "",
          rememberMe: "",
        }}
        validateOnBlur
        onSubmit={(values) => {
          console.log(values);
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
        }) => (
          <div>
            <label className={s.post} htmlFor="login">
              Login
            </label>
            <input
              className={s.input}
              type={"text"}
              name={"login"}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.login}
            ></input>
            {touched.login && errors.login && (
              <p className={s.error}>{errors.login}</p>
            )}
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
      </Formik>
    </div>
  );
};

const Login = () => {
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginForm />
    </div>
  );
};

export default Login;
