import { createContext, useReducer } from "react";
import Cookies from "js-cookie";

export const Store = createContext();
const initialState = {
  voterAddress: Cookies.get("voterAddress"),
  stateName: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_VOTER_ADDRESS":
      Cookies.set("voterAddress", action.payload);
      return { ...state, voterAddress: action.payload };
    case "STATE_DATA":
      return { ...state, stateName: action.payload };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
