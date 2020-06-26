import { takeEvery, put, call, all } from "redux-saga/effects";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { shopTypes } from "./shop.types";
import { fetchCollectionFailure, fetchCollectionSuccess } from "./shop.actions";

export function* fetchCollectionsStartAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionSuccess(collectionMap));
  } catch (err) {
    yield put(fetchCollectionFailure(err.message));
  }
}

export function* onfetchCollectionsStart() {
  yield takeEvery(
    shopTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsStartAsync
  );
}

export function* shopSagas() {
  yield all([call(onfetchCollectionsStart)]);
}
