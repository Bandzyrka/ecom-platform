import { takeLatest, put, all, call } from "typed-redux-saga/macro";

import { USER_ACTION_TYPES } from "./user.types";
import {User, createUserWithEmailAndPassword} from "firebase/auth"
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure,
  EmailSignInStart,
  SignUpStart,
  SignUpSuccess,
} from "./user.actions";

import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
  AdditionalData,
  signInAuthUserWithEmailAndPassword
} from "../../firebase/firebase.utils";

export function* getSnapshotFromUserAuth(userAuth: User, additionalData?  : AdditionalData) {
  try {
    const userSnapshot = yield* call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    if(userSnapshot)
    {
      yield* put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    }
  } catch (error) {
    yield* put(signInFailure(error as Error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield* getSnapshotFromUserAuth(user);
  } catch (error) {
    yield* put(signInFailure(error as Error));
  }
}

export function* signInWithEmail({ payload: { email, password } }: EmailSignInStart) {
  try {
    const userCredentials = yield* call(signInAuthUserWithEmailAndPassword, email, password);
    if(userCredentials)
    {
      const { user } = userCredentials
      yield* call(getSnapshotFromUserAuth, user);
    }
  } catch (error) {
    yield* put(signInFailure(error as Error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield* call(getCurrentUser);
    if (!userAuth) return
    
    yield* getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield* put(signInFailure(error as Error));
  }
}

export function* signOut() {
  try {
    yield* call(auth.signOut);
    yield* put(signOutSuccess());
  } catch (error) {
    yield* put(signOutFailure(error as Error));
  }
}
export function* signUp({ payload: { email, password, displayName } }:SignUpStart) {
  try {
    const userCredentials = yield* call(createUserWithEmailAndPassword, auth, email, password);
    if(userCredentials)
    {
      const { user } = userCredentials
      yield* put(signUpSuccess(user, { displayName }));
    }
  } catch (error) {
    yield* put(signUpFailure(error as Error));
  }
}

export function* signInAfterSignUp({ payload: { user, additionalData } }: SignUpSuccess) {
  yield* getSnapshotFromUserAuth(user, additionalData);
}

export function* onGoogleSignInStart() {
  yield* takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield* takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
  yield* takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}
export function* onSignUpStart() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}
export function* onSignUpSuccess() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* userSagas() {
  yield* all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}
