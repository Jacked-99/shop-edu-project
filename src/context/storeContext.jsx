import { createContext } from "react";

const StoreContext = createContext({
  default: [],
  items: [],
  setItems: () => {},
});

export default StoreContext;
