import { addMessage, updateNewMessageBody } from "../../Redux/dialog-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialogPage: state.dialogPage,
  };
};

const DialogsContainer = connect(mapStateToProps, {
  updateNewMessageBody,
  addMessage,
})(Dialogs);

export default DialogsContainer;
