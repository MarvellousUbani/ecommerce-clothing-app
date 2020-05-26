import ShopActionTypes from './shop.types';

export const updateCollections = collectionsmap => ({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsmap
});