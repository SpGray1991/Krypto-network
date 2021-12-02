import { rerenderEntireTree } from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi", like: 300 },
      { id: 2, message: "How are you?", like: 350 },
      { id: 3, message: "i'm fine!" },
      { id: 4, message: "" },
    ],
    newPostText: "HiFi",
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
};

window.state = state;

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    like: 0,
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state, addPost, updateNewPostText);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state, addPost, updateNewPostText);
};

export default state;
