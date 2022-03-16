import { createSelector } from 'reselect'

const selectShop = state => state.shop

export const shopSelectColecctions = createSelector(
    [selectShop],
    shop => shop.collections 
    )