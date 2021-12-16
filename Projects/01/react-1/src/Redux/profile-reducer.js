const ADD_POST = "ADD-POST";

const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const SET_USER_PROFILE = "SET_USER_PROFILE ";

let initialState = {
  posts: [
    { id: 1, message: "Hi", like: 300 },
    { id: 2, message: "How are you?", like: 350 },
    { id: 3, message: "i'm fine!" },
    { id: 4, message: "" },
  ],
  newPostText: "",
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        like: 0,
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };

    case SET_USER_PROFILE:
      console.log("SET_USER_PROFILE", state, action.profile);
      return { ...state, profile: action.profile };

    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return { type: ADD_POST };
};

export const updateNewPostTextActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
};

export const setUserProfile = (profile) => {
  console.log(profile);
  return { type: SET_USER_PROFILE, profile };
};

export default profileReducer;
