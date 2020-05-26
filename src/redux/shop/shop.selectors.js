import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
    
)

export const selectCollection = collectionURL => createSelector(
    [selectCollections],
    collections => (collections ? collections[collectionURL] : null)
);

