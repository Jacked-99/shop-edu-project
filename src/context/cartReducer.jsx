export const cartReducer = (state, action) => {
  if (action.type === "increase") {
    const newItem = action.item;
    const newItemPrice = newItem.quantity * newItem.price;

    const existingItemIndex = state.items.findIndex(
      (item) => item.name === newItem.name
    );
    const existingItem = state.items[existingItemIndex];
    let newItems;
    let modifiedItem;
    if (existingItem) {
      modifiedItem = {
        ...existingItem,
        quantity: existingItem.quantity + newItem.quantity,
      };
      newItems = [...state.items];
      newItems[existingItemIndex] = modifiedItem;
    } else {
      newItems = state.items.concat(newItem);
    }

    return {
      items: newItems,
      totalAmount: state.totalAmount + newItem.quantity,
      totalPrice: state.totalPrice + newItemPrice,
    };
  }
  if (action.type === "decrease") {
    const itemName = { ...action.id };

    let newItems = state.items.map((item) => {
      if (item.name === itemName.id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return { ...item };
    });
    let filteredItems = newItems.filter((item) => item.quantity != 0);

    return {
      ...state,
      items: filteredItems,
      totalAmount: state.totalAmount - 1,
    };
  }
  if (action.type === "clear") {
    return {
      items: [],
      totalAmount: 0,
      totalPrice: 0,
    };
  }
};
