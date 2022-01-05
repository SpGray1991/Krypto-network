import { Formik, Field } from "formik";
import * as yup from "yup";
import s from "./Login.module.css";

const LoginForm = (props) => {
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .typeError("Должно быть строкой")
      .required("Обязательно"),
    password: yup
      .string()
      .typeError("Должно быть строкой")
      .required("Обязательно"),
  });

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
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
