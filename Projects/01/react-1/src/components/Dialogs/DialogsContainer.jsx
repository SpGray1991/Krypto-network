import { addMessage, updateNewMessageBody } from "../../Redux/dialog-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";

let AuthRedirectComponent = withAuthRedirect(Dialogs);

let mapStateToProps = (state) => {
  return {
    dialogPage: state.dialogPage,
  };
};

const DialogsContainer = connect(mapStateToProps, {
  updateNewMessageBody,
  addMessage,
})(AuthRedirectComponent);

export default DialogsContainer;
