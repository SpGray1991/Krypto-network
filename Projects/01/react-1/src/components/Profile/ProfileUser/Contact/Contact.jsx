import style from "./Contact.module.css";

const Contact = (props) => {
  return (
    <div className={style.contact}>
      <p className={style.fieldProfile}>
        {props.contactTitle} :{" "}
        <span className={style.answer}>
          {props.contactValue === "null" || props.contactValue === ""
            ? "no"
            : props.contactValue}
        </span>
      </p>
    </div>
  );
};

export default Contact;
