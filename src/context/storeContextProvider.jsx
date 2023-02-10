import StoreContext from "./storeContext";
import { useState, useMemo } from "react";

const StoreContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [defaultstore, setDefault] = useState([]);
  const [modified, setModified] = useState(false);

  const onSetStoreItems = (actionData) => {
    if (actionData.type === "search") {
      if (actionData.value.trim() === "") {
        setItems([...defaultstore]);
      } else {
        setItems(
          items.filter((item) =>
            item.name.toLowerCase().includes(actionData.value.toLowerCase())
          )
        );
      }
    }
    if (actionData.type === "reset") {
      setModified(false);
      setItems([...defaultstore]);
    }
    if (actionData.type === "add") {
      setDefault([...actionData.value]);
      setItems([...actionData.value]);
    }
    if (actionData.type === "sort") {
      if (modified === false) {
        setItems(
          items.filter((item) => item.categories.includes(actionData.value))
        );
        setModified(true);
      } else {
        setItems([...defaultstore]);
        setModified(false);
      }
    }
  };
  const newStoreContext = {
    default: defaultstore,
    items: items,
    modified: modified,
    setItems: onSetStoreItems,
  };

  return (
    <StoreContext.Provider value={newStoreContext}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
