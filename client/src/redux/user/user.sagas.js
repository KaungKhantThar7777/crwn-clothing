import { takeLatest, put, call, all } from "redux-saga/effects";
import userTypes from "./user.types";

import {
  signinSuccess,
  signinFailure,
  signoutSuccess,
  signoutFailure,
  signupSuccess,
  signupFailure,
} from "./user.actions";

import {
  auth,
  createUserProfileDocument,
  googleProvider,
  getCurrentUser,
} from "../../firebase/firebase.utils";

function* getSnapshotFromAuth(userAuth, other = {}) {
  const userRef = yield call(createUserProfileDocument, userAuth, other);
  const userSnapshot = yield userRef.get();
  yield put(signinSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
}
export function* signinWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromAuth(user);
  } catch (err) {
    yield put(signinFailure(err.message));
  }
}
export function* onGoogleSigninStart() {
  yield takeLatest(userTypes.GOOGLE_SIGNIN_START, signinWithGoogle);
}

export function* signinWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromAuth(user);
  } catch (err) {
    yield put(signinFailure(err.message));
  }
}

export function* onEmailSigninStart() {
  yield takeLatest(userTypes.EMAIL_SIGNIN_START, signinWithEmail);
}

export function* isAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();

    if (!userAuth) return;
    yield getSnapshotFromAuth(userAuth);
  } catch (err) {
    yield signinFailure(err.message);
  }
}
export function* onCheckUserSession() {
  yield takeLatest(userTypes.CHECK_USER_SESSION, isAuthenticated);
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signoutSuccess());
  } catch (err) {
    yield put(signoutFailure(err.message));
  }
}
export function* onSignout() {
  yield takeLatest(userTypes.SIGNOUT_START, signOut);
}
export function* signup({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signupSuccess({ user, additionalData: { displayName } }));
  } catch (err) {
    yield put(signupFailure());
  }
}
export function* onSignup() {
  yield takeLatest(userTypes.SIGNUP_START, signup);
}

export function* singinAfterSignup({ payload: { user, additionalData } }) {
  yield getSnapshotFromAuth(user, additionalData);
}
export function* onSingupSuccess() {
  yield takeLatest(userTypes.SIGNUP_SUCCESS, singinAfterSignup);
}
export function* userSagas() {
  yield all([
    call(onGoogleSigninStart),
    call(onEmailSigninStart),
    call(onCheckUserSession),
    call(onSignout),
    call(onSignup),
    call(onSingupSuccess),
  ]);
}
