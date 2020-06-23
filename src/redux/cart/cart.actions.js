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
