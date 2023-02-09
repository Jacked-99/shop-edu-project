import StoreContext from "./storeContext";
import { useState, useMemo } from "react";

const StoreContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [defaultstore, setDefault] = useState([]);

  const onSetStoreItems = (actionData) => {
    let defaultItems = [];
    if (actionData.type === "search") {
      if (actionData.value.trim() === "") {
        setItems(defaultstore);
      }
      setItems(
        items.filter((item) =>
          item.name.toLowerCase().includes(actionData.value.toLowerCase())
        )
      );
    }
    if (actionData.type === "add") {
      setDefault([...actionData.value]);
      console.log(defaultItems);
      setItems([...actionData.value]);
    }
    if (actionData.type === "sort") {
      console.log(actionData.value);
      setItems(
        items.filter((item) => item.categories.includes(actionData.value))
      );
    }
  };
  const newStoreContext = {
    default: defaultstore,
    items: items,
    setItems: onSetStoreItems,
  };

  return (
    <StoreContext.Provider value={newStoreContext}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
