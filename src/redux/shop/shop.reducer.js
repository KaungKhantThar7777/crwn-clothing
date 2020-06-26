import { shopTypes } from "./shop.types";
const INITIAL_STATE = {
  isLoading: true,
  collections: null,
  errorMessage: undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isLoading: true,
      };
    case shopTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        collections: action.payload,
      };

    case shopTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isLoading: false,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
