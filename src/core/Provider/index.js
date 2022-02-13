// I use reinspect to provide me 'redux devtools' without redux!
import { useReducer } from "reinspect";
import React from "react";
import reducer from "core/reducer";
import initialState from "core/initialState";

export const GlobalContext = React.createContext();

// This sets up my UseReducer + context - providing me an easy way to manage global state
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(
    reducer,
    initialState,
    (state) => state,
    "globalContext"
  );

  // I like to modify the dispatch for personal projects
  // because I don't want to type "type: " & "payload: " everytime I use dispatch
  // (I know, call me lazy)
  // The downside to this is that it requires you to remember the order of parameters for dispatch.
  // ie - type first, then payload second.
  const modifiedDispatch = (type, payload) => dispatch({ type, payload });

  return (
    <GlobalContext.Provider value={{ state, dispatch: modifiedDispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default Provider;
