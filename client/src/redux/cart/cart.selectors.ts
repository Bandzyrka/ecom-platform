import { createSelector } from "reselect";
import { CartState } from "./cart.reducer";
const selectCart = (state): CartState => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems): number =>
    cartItems.reduce((accQuantity, item) => accQuantity + item.quantity, 0)
);
export const selectCartItemsTotal = createSelector(
  [selectCartItems],
  (cartItems): number =>
    cartItems.reduce(
      (accQuantity, item) => accQuantity + item.quantity * item.price,
      0
    )
);
