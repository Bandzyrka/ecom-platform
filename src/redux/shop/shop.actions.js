import ShopActionTypes from './shop.types.js';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

export const fetchCollectionStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTION_START,
})
export const fetchCollectionSucces = (collectionsMap) => ({
    type: ShopActionTypes.FETCH_COLLECTION_SUCCES,
    payload: collectionsMap
})
export const fetchCollectionFailure = (error) => ({
    type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
    payload: error
})
export const fetchCollectionStartAsync = () => {
    return dispatch => {
        dispatch(fetchCollectionStart()); 
        const collectionRef = firestore.collection('collections');
        collectionRef.get().then(snapshot => {
             const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
             dispatch(fetchCollectionSucces(collectionsMap))
           }).catch(error => {dispatch(fetchCollectionFailure(error.message))});
         }
    }    