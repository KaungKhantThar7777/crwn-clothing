import { CartTypes } from "./cart.types";
import { addItemToCart, removeItemFromCart, decreaseQty } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartTypes.TOGGLE_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CartTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case CartTypes.DECREASE_QTY:
      console.log(state.cartItems, action.payload);
      return {
        ...state,
        cartItems: decreaseQty(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
