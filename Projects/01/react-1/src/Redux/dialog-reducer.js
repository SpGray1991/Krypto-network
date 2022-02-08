const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "User1" },
    { id: 2, name: "User2" },
    { id: 3, name: "User3" },
    { id: 4, name: "User4" },
    { id: 5, name: "User5" },
    { id: 6, name: "User6" },
    { id: 7, name: "User7" },
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "I'm fine!" },
    { id: 4, message: "Ok" },
  ],
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 5,
        message: action.name,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
      };

    default:
      return state;
  }
};

export const addMessage = (name) => {
  return { type: ADD_MESSAGE, name };
};

export default dialogReducer;
