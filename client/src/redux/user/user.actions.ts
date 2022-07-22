import { USER_ACTION_TYPES } from "./user.types";
import {
  Action,
  ActionWithPayload,
  withMatcher,
  AdditionalData
} from "../../utils/reducer/reducer.utils";
import { UserData } from "../../firebase/firebase.utils";
import {User} from 'firebase/auth'
export type GoogleSignInStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>;
export const googleSignInStart = withMatcher(
  (): GoogleSignInStart => ({
    type: USER_ACTION_TYPES.GOOGLE_SIGN_IN_START,
  })
);

export type SignInSuccess = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_IN_SUCCESS,
  UserData
>;
export const signInSuccess = withMatcher(
  (user: UserData & { id: string}): SignInSuccess => ({
    type: USER_ACTION_TYPES.SIGN_IN_SUCCESS,
    payload: user,
  })
);

export type SignInFailure = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_IN_FAILURE,
  Error
>;
export const signInFailure = withMatcher(
  (error: Error): SignInFailure => ({
    type: USER_ACTION_TYPES.SIGN_IN_FAILURE,
    payload: error,
  })
);

export type EmailAndPassword = {
  email: string;
  password: string;
};

export type EmailSignInStart = ActionWithPayload<
  USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
  EmailAndPassword
>;
export const emailSignInStart = withMatcher(
  (emailAndPassword: EmailAndPassword): EmailSignInStart => ({
    type: USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
    payload: emailAndPassword,
  })
);

export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>;
export const checkUserSession = withMatcher(
  (): CheckUserSession => ({
    type: USER_ACTION_TYPES.CHECK_USER_SESSION,
  })
);

export type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>;
export const signOutStart = withMatcher(
  (): SignOutStart => ({
    type: USER_ACTION_TYPES.SIGN_OUT_START,
  })
);

export type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>;
export const signOutSuccess = withMatcher(
  (): SignOutSuccess => ({
    type: USER_ACTION_TYPES.SIGN_OUT_SUCCESS,
  })
);

export type SignOutFailure = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_OUT_FAILURE,
  Error
>;
export const signOutFailure = withMatcher(
  (error: Error): SignOutFailure => ({
    type: USER_ACTION_TYPES.SIGN_OUT_FAILURE,
    payload: error,
  })
);

export type UserCredentials = {
  email: string;
  displayName: string;
  password: string;
};

export type SignUpStart = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_START,
  UserCredentials
>;
export const signUpStart = withMatcher((userCredentials: UserCredentials) => ({
  type: USER_ACTION_TYPES.SIGN_UP_START,
  payload: userCredentials,
}));

export type SignUpSuccess = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_SUCCESS,
  {user: User, additionalData: AdditionalData}
>;
export const signUpSuccess = withMatcher(
  (user: User, additionalData: AdditionalData): SignUpSuccess =>
    ({
      type: USER_ACTION_TYPES.SIGN_UP_SUCCESS, 
      payload:  { user, additionalData }
    })
);
export type SignUpFailure = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_FAILURE,
  Error
>;

export const signUpFailure = withMatcher(
  (error: Error): SignUpFailure => ({
    type: USER_ACTION_TYPES.SIGN_UP_FAILURE,
    payload: error,
  })
);
