let store = {
  rerenderEntireTree() {
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
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      like: 0,
    };

    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this.rerenderEntireTree(this._state, this.addPost, this.updateNewPostText);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this.rerenderEntireTree(this._state, this.addPost, this.updateNewPostText);
  },
  subscribe(observer) {
    this.rerenderEntireTree = observer;
  },
};

export default store;
