import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.messages.map((e) => (
    <Message message={e.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialog_items}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
