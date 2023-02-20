import CartContext from "./cartContext";
import { useReducer } from "react";
import { cartReducer } from "./cartReducer";
const initState = { items: [], totalPrice: 0, totalAmount: 0 };

const CartContextPrvider = (props) => {
  const [state, dispatch] = useReducer(cartReducer, initState);

  const addItemToCart = (item) => {
    dispatch({ type: "increase", item: item });
  };
  const removeItemFromCart = (id) => {
    dispatch({ type: "decrease", id: id });
  };
  const clearCartClick = () => {
    dispatch({ type: "clear" });
  };
  const cartContext = {
    items: state.items,
    totalPrice: state.totalPrice,
    totalAmount: state.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
    clearCart: clearCartClick,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextPrvider;
