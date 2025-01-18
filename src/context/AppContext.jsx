import React, { createContext, useReducer } from "react";

const AppContext = createContext();
import { users } from "../mockdata/users";
import { goals } from "../mockdata/goals";

const initialState = {
  users: users,
  goals: goals,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return { ...state, users: [...state.users, action.payload] };
    case "ADD_GOAL":
      return { ...state, goals: [...state.goals, action.payload] };
      case "DELETE_GOAL":
  return { ...state, goals: state.goals.filter((goal) => goal.id !== action.payload) };

    default:
      return state;
  }
};


export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    return (
      <AppContext.Provider value={{ state, dispatch }}>
        {children}
      </AppContext.Provider>
    );
  };
  
  export default AppContext;