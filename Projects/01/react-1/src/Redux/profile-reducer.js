import { userAPI, userProfileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";
const SET_PROFILE_UPDATE_STATUS = "SET_PROFILE_UPDATE_STATUS";

const SET_USER_PROFILE = "SET_USER_PROFILE ";

const SET_USER_STATUS = "SET_USER_STATUS";

const SET_PROFILE = "SET_PROFILE";

let initialState = {
  posts: [
    { id: 1, message: "Hi", like: 300 },
    { id: 2, message: "How are you?", like: 350 },
    { id: 3, message: "I'm fine!", like: 250 },
    { id: 4, message: "You cool!", like: 200 },
  ],
  profile: "",
  status: "",
  profileUpdateStatus: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: action.name,
        like: 0,
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id != action.postId),
      };

    case SET_PROFILE_UPDATE_STATUS:
      return { ...state, profileUpdateStatus: action.status };

    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };

    case SET_PROFILE:
      return { ...state, profile: action.profile };

    case SET_USER_STATUS:
      return { ...state, status: action.status };

    case SAVE_PHOTO_SUCCESS:
      return { ...state, profile: { ...state.profile, photos: action.photos } };

    default:
      return state;
  }
};

export const addPost = (name) => {
  return { type: ADD_POST, name };
};

export const deletePost = (postId) => {
  return { type: DELETE_POST, postId };
};

export const savePhotoSuccess = (photos) => {
  return { type: SAVE_PHOTO_SUCCESS, photos };
};

export const setUserProfile = (profile) => {
  return { type: SET_USER_PROFILE, profile };
};

export const setUserStatus = (status) => {
  return { type: SET_USER_STATUS, status };
};

export const setProfileUpdateStatus = (status) => {
  return { type: SET_PROFILE_UPDATE_STATUS, status };
};

export const setProfile = (profile) => {
  return { type: SET_PROFILE, profile };
};

export const getUserId = (userId) => {
  return (dispatch) => {
    userAPI.getUserId(userId).then((data) => {
      dispatch(setUserProfile(data));
    });
  };
};

export const getUserStatus = (userId) => {
  return (dispatch) => {
    userProfileAPI.getStatus(userId).then((response) => {
      dispatch(setUserStatus(response.data));
    });
  };
};

export const updateStatus = (status) => {
  return (dispatch) => {
    userProfileAPI.updateStatus(status).then((response) => {
      if (response.data.resultCode === 0) dispatch(setUserStatus(status));
    });
  };
};

export const savePhoto = (file) => {
  return (dispatch) => {
    userProfileAPI.savePhoto(file).then((response) => {
      if (response.data.resultCode === 0)
        dispatch(savePhotoSuccess(response.data.data.photos));
    });
  };
};

export const saveProfile = (profile, setStatus, goToEditMode) => {
  return (dispatch, getState) => {
    const userId = getState().auth.id;
    userProfileAPI.changeProfile(profile).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(getUserId(userId));
        dispatch(setProfileUpdateStatus(true));
        goToEditMode();
      } else {
        setStatus(response.data.messages);
      }
    });
  };
};

export default profileReducer;
