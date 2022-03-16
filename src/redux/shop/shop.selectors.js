import { createSelector } from 'reselect'
import memoize from 'lodash.memoize';

const selectShop = state => state.shop

export const shopSelectCollections = createSelector(
    [selectShop],
    shop => shop.collections 
    )
export const shopSelectCollectionsForPreview = createSelector(
    [shopSelectCollections],
    collections => Object.keys(collections).map(key => collections[key])
    )
export const shopSelectCollection = memoize(collectionUrlParam => createSelector(
    [shopSelectCollections],
    collection => collection[collectionUrlParam]
)
);