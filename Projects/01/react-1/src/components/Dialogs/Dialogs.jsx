import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = () => {
  let dialogs = [
    { id: 1, name: "Brother" },
    { id: 2, name: "Kostya" },
    { id: 3, name: "Sanya" },
    { id: 4, name: "Dimon" },
    { id: 5, name: "Vanya" },
    { id: 6, name: "Toha" },
    { id: 7, name: "Kerya" },
  ];

  let dialogsElements = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messages = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "i'm fine!" },
    { id: 4, message: "Ok" },
  ];

  let messagesElements = messages.map((e) => <Message message={e.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialog_items}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
