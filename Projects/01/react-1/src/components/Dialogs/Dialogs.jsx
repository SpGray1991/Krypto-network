import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.messages.map((e) => (
    <Message message={e.message} />
  ));

  let onAddMessage = () => {
    props.addMessage();
  };

  let handleSubmit = (e) => {
    e.preventDefault();
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageBody(text);
  };

  let newMessageElement = React.useRef();

  return (
    <div className={s.dialogs}>
      <div className={s.dialog_items}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <form onSubmit={handleSubmit}>
            <label className={s.post} for="content">
              My messages
            </label>
            <textarea
              onChange={onMessageChange}
              value={props.newMessageBody}
              ref={newMessageElement}
            ></textarea>
            <button onClick={onAddMessage} className={s.btn} type="submit">
              Add message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
