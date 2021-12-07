const ADD_POST = "ADD-POST";

const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let store = {
  _callSubscriber() {
    console.log("State changed");
  },
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi", like: 300 },
        { id: 2, message: "How are you?", like: 350 },
        { id: 3, message: "i'm fine!" },
        { id: 4, message: "" },
      ],
      newPostText: "",
    },
    dialogPage: {
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
    },
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        like: 0,
      };

      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => {
  return { type: ADD_POST };
};

export const updateNewPostTextActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
};

export default store;
