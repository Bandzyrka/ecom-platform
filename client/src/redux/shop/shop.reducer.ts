import { COLLECTIONS_ACTION_TYPES, Collection} from './shop.types';
import { CollectionAction } from './shop.actions';


export type CollectionsState = {
  readonly collections: Collection[];
  readonly isCollectionFetching: boolean;
  readonly errorMessage: Error | null;
}


export const COLLECTIONS_INITIAL_STATE: CollectionsState = {
  collections: [],
  isCollectionFetching: false,
  errorMessage: null
};

export const shopReducer = (
    state = COLLECTIONS_INITIAL_STATE, 
    action = {} as CollectionAction
    ) => {

    switch (action.type) {
    case COLLECTIONS_ACTION_TYPES.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isCollectionFetching: true,
      } 
    case COLLECTIONS_ACTION_TYPES.FETCH_COLLECTIONS_SUCCES:
      return {
        ...state,
        isCollectionFetching: false,
        collections: action.payload
      };
    case COLLECTIONS_ACTION_TYPES.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isCollectionFetching: false,
        errorMessage: action.payload
      }
    default:
      return state;
  }
};

export default shopReducer;