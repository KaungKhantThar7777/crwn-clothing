import { shopTypes } from "./shop.types";

export const fetchCollectionStart = () => {
  return {
    type: shopTypes.FETCH_COLLECTIONS_START,
  };
};

export const fetchCollectionSuccess = (collectionMap) => {
  return {
    type: shopTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap,
  };
};

export const fetchCollectionFailure = (errorMsg) => {
  return {
    type: shopTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMsg,
  };
};
