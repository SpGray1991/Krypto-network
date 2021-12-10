import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from "../../Redux/dialog-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogPage;

  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  let onMessageChange = (text) => {
    let action = updateNewMessageBodyActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <Dialogs
      updateNewMessageBody={onMessageChange}
      addMessage={addMessage}
      newMessageBody={state.newMessageBody}
      dialogs={state.dialogs}
      messages={state.messages}
    />
  );
};

export default DialogsContainer;
