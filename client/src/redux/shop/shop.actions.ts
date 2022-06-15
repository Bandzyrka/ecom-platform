import { COLLECTIONS_ACTION_TYPES, Collection } from './shop.types.js';
import { createAction, Action, ActionWithPayload } from '../../utils/reducer/reducer.utils.js';

export type FetchCollectionsStart = Action<COLLECTIONS_ACTION_TYPES.FETCH_COLLECTIONS_START>

export type FetchCollectionsSuccess = ActionWithPayload<COLLECTIONS_ACTION_TYPES.FETCH_COLLECTIONS_SUCCES, Collection[]>

export type FetchCollectionsFailure = ActionWithPayload<COLLECTIONS_ACTION_TYPES.FETCH_COLLECTIONS_FAILURE, Error>


export const fetchCollectionsStart = (): FetchCollectionsStart => 
    createAction(
        COLLECTIONS_ACTION_TYPES.FETCH_COLLECTIONS_START
        );

export const fetchCollectionsSucces = (collectionsMap: Collection[]): FetchCollectionsSuccess => 
    createAction(
        COLLECTIONS_ACTION_TYPES.FETCH_COLLECTIONS_SUCCES,
        collectionsMap
        );

export const fetchCollectionsFailure = (error: Error): FetchCollectionsFailure => 
    createAction(
        COLLECTIONS_ACTION_TYPES.FETCH_COLLECTIONS_FAILURE,
        error
        );

export type CollectionAction = 
| FetchCollectionsStart 
| FetchCollectionsSuccess  
| FetchCollectionsFailure;