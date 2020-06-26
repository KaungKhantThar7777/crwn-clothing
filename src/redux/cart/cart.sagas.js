import { takeLatest, all, call, put } from "redux-saga/effects";
import userTypes from "../user/user.types";
import { clearCartOnSignout } from "./cart.actions";

export function* clearCart() {
  yield put(clearCartOnSignout());
}
export function* onClearCart() {
  yield takeLatest(userTypes.SIGNOUT_SUCCESS, clearCart);
}

export function* cartSagas() {
  yield all([call(onClearCart)]);
}
