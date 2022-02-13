import { useReducer } from "reinspect";
import React from "react";
import reducer from "core/reducer";
import initialState from "core/initialState";

export const GlobalContext = React.createContext();

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(
    reducer,
    initialState,
    (state) => state,
    "globalContext"
  );
  const modifiedDispatch = (type, payload) => dispatch({ type, payload });

  return (
    <GlobalContext.Provider value={{ state, dispatch: modifiedDispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default Provider;
