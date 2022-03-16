import { createSelector } from 'reselect'
import memoize from 'lodash.memoize';

const COLLECTION_MAP_ID = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5,
}

const selectShop = state => state.shop

export const shopSelectColecctions = createSelector(
    [selectShop],
    shop => shop.collections 
    )
export const shopSelectCollection = memoize(collectionUrlParam => createSelector(
    [shopSelectColecctions],
    collection => collection.find
    (collection => collection.id === COLLECTION_MAP_ID[collectionUrlParam])
)
);