import { CartTypes } from "./cart.types";

export const toggleHidden = () => {
  return {
    type: CartTypes.TOGGLE_HIDDEN,
  };
};

export const addItem = (item) => {
  return {
    type: CartTypes.ADD_ITEM,
    payload: item,
  };
};

export const removeItem = (id) => {
  return {
    type: CartTypes.REMOVE_ITEM,
    payload: id,
  };
};

export const decreaseQty = (id) => {
  return {
    type: CartTypes.DECREASE_QTY,
    payload: id,
  };
};
