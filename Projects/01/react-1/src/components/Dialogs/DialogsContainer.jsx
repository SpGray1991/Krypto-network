import {
  addMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from "../../Redux/dialog-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

/* const DialogsContainer = (props) => {
  let dialogPage = props.store.getState().dialogPage;

  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  let onMessageChange = (text) => {
   /*  let action = updateNewMessageBodyActionCreator(text);
    props.store.dispatch(action); */
/*  store.dispatch(updateNewMessageBodyActionCreator(text));
  };

  return (
    <Dialogs
      updateNewMessageBody={onMessageChange}
      addMessage={addMessage}
      dialogPage={props.store.getState().dialogPage} */
/* newMessageBody={state.newMessageBody}
      dialogs={state.dialogs}
      messages={state.messages} */

let mapStateToProps = (state) => {
  return {
    dialogPage: state.dialogPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (text) => {
      dispatch(updateNewMessageBodyActionCreator(text));
    },
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
