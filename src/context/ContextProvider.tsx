import { createContext, useReducer, useContext } from "react";
import playerReducer, { initialValues } from "./playerReducer";

const StoreContext = createContext();

const PlayerProvider = ({ children }) => {
  return (
    <StoreContext.Provider value={useReducer(playerReducer, initialValues)}>
      {children}
    </StoreContext.Provider>
  );
};

const useStore = () => {
  return useContext(StoreContext)[0];
};
const useDispatch = () => useContext(StoreContext)[1];

export { StoreContext, useStore, useDispatch };
export default PlayerProvider;
