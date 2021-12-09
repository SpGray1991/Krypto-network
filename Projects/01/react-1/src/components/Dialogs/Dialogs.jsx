import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from "../../Redux/dialog-reducer";

const Dialogs = (props) => {
  let state = props.store.getState().dialogPage;

  let newMessageBody = state.newMessageBody;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = state.messages.map((e) => (
    <Message message={e.message} />
  ));

  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  let handleSubmit = (e) => {
    e.preventDefault();
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.store.dispatch(updateNewMessageBodyActionCreator(text));
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
              value={newMessageBody}
              ref={newMessageElement}
            ></textarea>
            <button onClick={addMessage} className={s.btn} type="submit">
              Add message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
