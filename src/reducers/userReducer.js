import userStorage from "./../utils/userStorage";

export default function userReducer(
  state = { username: "Гость", role: "guest" },
  action
) {
  switch (action.type) {
    case "@@INIT": {
      return {
        ...state,
        username: userStorage.getItem("username"),
        role: userStorage.getItem("role"),
      };
    }
    case "LOGIN": {
      return {
        ...state,
        username: action.payload.username,
        role: action.payload.role,
      };
    }
    case "LOGOUT": {
      return {
        ...state,
        username: "Гость",
        role: "guest",
      };
    }
    default:
      return state;
  }
}
