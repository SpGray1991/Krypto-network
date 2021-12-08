import Chat from "./Chat/Chat";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.state.messages.map((e) => (
    <Message message={e.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialog_items}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElements}
        <Chat
          /* state2={props.state2.posts}
          postText={props.state.newPostText} */
          dispatch={props.dispatch}
        />
      </div>
    </div>
  );
};

export default Dialogs;
