import { Formik } from "formik";
import style from "./AddMessageForm.module.css";

const AddMessageForm = (props) => {
  return (
    <div>
      <Formik
        initialValues={{ name: "" }}
        onSubmit={(values) => {
          props.addMessage(values.name);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <div>
            <label className={style.post} htmlFor="name">
              My messages
            </label>
            <textarea
              className={style.fieldMessage}
              type={"text"}
              name={"name"}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            ></textarea>
            <button
              onClick={handleSubmit}
              className={style.btn}
              type={"submit"}
            >
              Add messages
            </button>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default AddMessageForm;
