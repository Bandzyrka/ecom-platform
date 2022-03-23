import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
  collections: null,
  isCollectionFetching: false,
  errorMessage: undefined
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isCollectionFetching: true,
      } 
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCES:
      return {
        ...state,
        isCollectionFetching: false,
        collections: action.payload
      };
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
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