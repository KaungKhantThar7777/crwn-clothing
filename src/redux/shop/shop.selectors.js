import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollection = (urlParam) =>
  createSelector(
    [selectShopCollections],
    (collections) => collections[urlParam]
  );

export const selectCollectionForPreview = createSelector(
  [selectShopCollections],
  (collections) => {
    return Object.keys(collections).map((key) => collections[key]);
  }
);

export const selectIsLoading = createSelector(
  [selectShop],
  (shop) => !shop.collections
);
