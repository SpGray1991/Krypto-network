import { Formik } from "formik";
import style from "./AddPostForm.module.css";

const AddPostForm = (props) => {
  return (
    <div>
      <Formik
        initialValues={{ name: "" }}
        onSubmit={(values) => {
          props.addPost(values.name);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <div>
            <label className={style.post} htmlFor="name">
              My posts
            </label>
            <textarea
              className={style.fieldText}
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
              Add post
            </button>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default AddPostForm;
