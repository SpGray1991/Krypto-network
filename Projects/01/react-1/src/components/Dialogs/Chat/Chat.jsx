import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from "../../../Redux/dialog-reducer";

import s from "./Chat.module.css";

const Chat = (props) => {
  /* let messagesElements = props.state2.map((p) => (
    <MessagePost message={p.message} />
  )); */

  /* let newMessageBody = props.state.newMessageBody; */

  let newMessageElement = React.useRef();

  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  };

  let handleSubmit = (e) => {
    e.preventDefault();
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.dispatch(updateNewMessageBodyActionCreator(text));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className={s.post} for="content">
          My messages
        </label>
        <textarea
          onChange={onMessageChange}
          /* value={newMessageBody} */
          ref={newMessageElement}
        ></textarea>
        <button onClick={addMessage} className={s.btn} type="submit">
          Add message
        </button>
      </form>
    </>
  );
};

export default Chat;
