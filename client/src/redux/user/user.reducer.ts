import {USER_ACTION_TYPES} from './user.types';
import {AnyAction} from 'redux'

export type UserState = {
  readonly currentUser: string | null
  readonly error: Error | null
};


export const USER_INITIAL_STATE: UserState = {
  currentUser: null,
  error: null
};

export const userReducer = (
  state = USER_INITIAL_STATE,
  action = {} as AnyAction
  ) => {
  switch (action.type) {
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      };
    case USER_ACTION_TYPES.SIGN_UP_FAILURE:
    case USER_ACTION_TYPES.SIGN_IN_FAILURE:
    case USER_ACTION_TYPES.SIGN_OUT_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;