import reportWebVitals from "./reportWebVitals";
import { rerenderEntireTree } from "./render";
import state, { addPost, updateNewPostText } from "./Redux/state";

rerenderEntireTree(state, addPost, updateNewPostText);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
