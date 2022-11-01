import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    _id: "63526071f983e51f1138ad3e",
    username: "john",
    email: "john@gmail.com",
    password: "$2b$10$Nqony6KT5v8PwSB1u1feLOr0E3o5gr6PeOc1woPr9cAeWJjTN3tCW",
    profilePicture: "",
    coverPicture: "",
    followers: [],
    followings: [],
  },
  isAdmin: false,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  //   useEffect(() => {
  //     localStorage.setItem("user", JSON.stringify(state.user));
  //   }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
