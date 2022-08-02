import { createSelector } from 'reselect';
import { CollectionsState } from './shop.reducer';
import { CollectionMap } from './shop.types'

const selectShop = (state): CollectionsState => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections): CollectionMap => 
   Object.values(collections).reduce((acc, collection) => {
      const {title, items} = collection;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CollectionMap)
);

export const selectCollection = (collectionUrlParam: string) =>
  createSelector(
    [selectCollections],
    collections => (collections ? collections[collectionUrlParam] : null)
  );
export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isCollectionFetching
  )
export const selectIsCollectionLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
)