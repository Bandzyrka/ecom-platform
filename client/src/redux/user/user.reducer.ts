import {
  signInSuccess,
  signOutSuccess,
  signUpFailure,
  signInFailure,
  signOutFailure,
} from "./user.actions";
import { AnyAction } from "redux";

export type UserState = {
  readonly currentUser: string | null;
  readonly error: Error | null;
};

export const USER_INITIAL_STATE: UserState = {
  currentUser: null,
  error: null,
};

export const userReducer = (
  state = USER_INITIAL_STATE,
  action = {} as AnyAction
) => {
  if (signInSuccess.match(action)) {
    return {
      ...state,
      currentUser: action.payload,
      error: null,
    };
  }
  if (signOutSuccess.match(action)) {
    return {
      ...state,
      currentUser: null,
      error: null,
    };
  }
  if (
    signUpFailure.match(action) ||
    signInFailure.match(action) ||
    signOutFailure.match(action)
  ) {
    return {
      ...state,
      error: action.payload,
    };
  }
  return state;
};

export default userReducer;
