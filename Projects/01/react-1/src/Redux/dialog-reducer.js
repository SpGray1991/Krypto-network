const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY ";

const ADD_MESSAGE = "ADD-MESSAGE";

const dialogReducer = (state, action) => {
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
