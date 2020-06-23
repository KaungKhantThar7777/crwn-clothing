import { CartTypes } from "./cart.types";

const toggleHidden = () => {
  return {
    type: CartTypes.TOGGLE_HIDDEN,
  };
};
export default toggleHidden;
