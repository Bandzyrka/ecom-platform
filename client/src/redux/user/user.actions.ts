import { USER_ACTION_TYPES } from "./user.types";
import {
  createAction,
  Action,
  ActionWithPayload,
} from "../../utils/reducer/reducer.utils";
import { withMatcher } from "../../utils/reducer/reducer.utils";

export type GoogleSignInStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>;

export type signInSucces = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_SUCCESS, string>;


export const googleSignInStart = () => ({
  type: USER_ACTION_TYPES.GOOGLE_SIGN_IN_START
});

export const signInSuccess = user => ({
  type: USER_ACTION_TYPES.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailure = error => ({
  type: USER_ACTION_TYPES.SIGN_IN_FAILURE,
  payload: error
});

export const emailSignInStart = emailAndPassword => ({
  type: USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

export const checkUserSession = () => ({
  type: USER_ACTION_TYPES.CHECK_USER_SESSION
});

export const signOutStart = () => ({
  type: USER_ACTION_TYPES.SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: USER_ACTION_TYPES.SIGN_OUT_SUCCESS
});

export const signOutFailure = error => ({
  type: USER_ACTION_TYPES.SIGN_OUT_FAILURE,
  payload: error
});
export const signUpStart = userCredentials => ({
  type: USER_ACTION_TYPES.SIGN_UP_START,
  payload: userCredentials
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: USER_ACTION_TYPES.SIGN_UP_SUCCESS,
  payload: { user, additionalData }
});

export const signUpFailure = error => ({
  type: USER_ACTION_TYPES.SIGN_UP_FAILURE,
  payload: error
})