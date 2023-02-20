import { createContext } from "react";

const CartContext = createContext({
  items: [],
  totalPrice: 0,
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
});

export default CartContext;
