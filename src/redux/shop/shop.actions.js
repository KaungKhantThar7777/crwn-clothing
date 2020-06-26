import { shopTypes } from "./shop.types";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
export const fetchCollectionStart = () => {
  return {
    type: shopTypes.FETCH_COLLECTIONS_START,
  };
};

export const fetchCollectionStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionStart());

    collectionRef
      .get()
      .then(async (snapshot) => {
        const collectionMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionSuccess(collectionMap));
      })
      .catch((err) => dispatch(fetchCollectionFailure(err)));
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
