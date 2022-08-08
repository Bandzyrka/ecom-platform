import { Collection } from "./shop.types";
import { AnyAction } from "redux";
import {
  fetchCollectionsStart,
  fetchCollectionsSucces,
  fetchCollectionsFailure,
} from "./shop.actions";
export type CollectionsState = {
  readonly collections: Collection[];
  readonly isCollectionFetching: boolean;
  readonly errorMessage: Error | null;
};

export const COLLECTIONS_INITIAL_STATE: CollectionsState = {
  collections: [],
  isCollectionFetching: false,
  errorMessage: null,
};

export const shopReducer = (
  state = COLLECTIONS_INITIAL_STATE,
  action = {} as AnyAction
) => {
  if (fetchCollectionsStart.match(action)) {
    return {
      ...state,
      isCollectionFetching: true,
    };
  }
  if (fetchCollectionsSucces.match(action)) {
    return {
      ...state,
      collections: action.payload,
      isCollectionFetching: false,
    };
  }
  if (fetchCollectionsFailure.match(action)) {
    return {
      ...state,
      isCollectionFetching: false,
      errorMessage: action.payload,
    };
  }
  return state;
};

export default shopReducer;
