const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY ";

const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Brother" },
    { id: 2, name: "Kostya" },
    { id: 3, name: "Sanya" },
    { id: 4, name: "Dimon" },
    { id: 5, name: "Vanya" },
    { id: 6, name: "Toha" },
    { id: 7, name: "Kerya" },
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "i'm fine!" },
    { id: 4, message: "Ok" },
  ],
  newMessageBody: "",
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 5,
        message: state.newMessageBody,
      };

      state.messages.push(newMessage);
      state.newMessage = "";
      return state;
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.newText;

      return state;
    default:
      return state;
  }
};

export const addMessageActionCreator = () => {
  return { type: ADD_MESSAGE };
};

export const updateNewMessageBodyActionCreator = (text) => {
  return { type: UPDATE_NEW_MESSAGE_BODY, newText: text };
};

export default dialogReducer;
