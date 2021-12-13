const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    /*    {
      id: 1,
      follow: false,
      photoUrl: "https://gtavrl.ru/public/a15-krasivaya-muzhskaya-avatarka.jpg",
      fullName: "Sergey",
      status: "I am a boss",
      location: { city: "Zaporizhzhia", country: "Ukraine" },
    },
    {
      id: 2,
      follow: false,
      photoUrl: "https://gtavrl.ru/public/poscreenra.jpg",
      fullName: "Aleksandr",
      status: "I am the boss brother",
      location: { city: "Zielona Gura", country: "Poland" },
    },
    {
      id: 3,
      follow: false,
      photoUrl: "https://gtavrl.ru/public/fscreenshot-zd.jpg",
      fullName: "Dimon",
      status: "I am the boss friend",
      location: { city: "Zaporizhzhia", country: "Ukraine" },
    }, */
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      };

    default:
      return state;
  }
};

export const followAC = (userId) => {
  return { type: FOLLOW, userId };
};

export const unfollowAC = (userId) => {
  return { type: UNFOLLOW, userId };
};

export const setUsersAc = (users) => {
  return { type: SET_USERS, users };
};

export default usersReducer;
