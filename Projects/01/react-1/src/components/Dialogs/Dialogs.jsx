import DialogItem from "./DialogItem/DialogItem";
import style from "./Dialogs.module.css";
import Message from "./Message/Message";
import React from "react";
import { Navigate } from "react-router-dom";
import AddMessageForm from "./MessageForm/AddMessageForm";

const Dialogs = (props) => {
  let state = props.dialogPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} /* key={d.id}  */ />
  ));

  let messagesElements = state.messages.map((e) => (
    <Message message={e.message} />
  ));

  if (!props.isAuth) {
    return <Navigate to="/login/" />;
  }

  return (
    <div className={style.dialogs}>
      <div className={style.messages}>{dialogsElements}</div>
      <div>
        <div>{messagesElements}</div>
        <div>
          <AddMessageForm addMessage={props.addMessage} />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
