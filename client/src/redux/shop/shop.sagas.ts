import { takeLatest, call, put, all } from "typed-redux-saga";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import {
  fetchCollectionsSucces,
  fetchCollectionsFailure,
} from "./shop.actions";

import { COLLECTIONS_ACTION_TYPES } from "./shop.types";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield* put(fetchCollectionsSucces(collectionsMap));
  } catch (error) {
    yield* put(fetchCollectionsFailure(error as Error));
  }
}

export function* fetchCollectionsStart() {
  yield* takeLatest(
    COLLECTIONS_ACTION_TYPES.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
export function* shopSagas() {
  yield* all([call(fetchCollectionsStart)]);
}
