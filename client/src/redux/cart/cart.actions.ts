import { CART_ACTION_TYPES, CartItem } from "./cart.types";
import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from "../../utils/reducer/reducer.utils";

export type ToggleCartHidden = Action<CART_ACTION_TYPES.TOGGLE_CART_HIDDEN>;
export const toggleCartHidden = withMatcher(
  (): ToggleCartHidden => createAction(CART_ACTION_TYPES.TOGGLE_CART_HIDDEN)
);

export type AddItem = ActionWithPayload<CART_ACTION_TYPES.ADD_ITEM, CartItem>;
export const addItem = withMatcher(
  (item: CartItem): AddItem => createAction(CART_ACTION_TYPES.ADD_ITEM, item)
);

export type RemoveItem = ActionWithPayload<
  CART_ACTION_TYPES.REMOVE_ITEM,
  CartItem
>;
export const removeItem = withMatcher(
  (item: CartItem): RemoveItem =>
    createAction(CART_ACTION_TYPES.REMOVE_ITEM, item)
);

export type ClearItem = ActionWithPayload<
  CART_ACTION_TYPES.CLEAR_ITEM_FROM_CART,
  CartItem
>;
export const clearItem = withMatcher(
  (item: CartItem): ClearItem =>
    createAction(CART_ACTION_TYPES.CLEAR_ITEM_FROM_CART, item)
);

export type ClearCart = Action<CART_ACTION_TYPES.CLEAR_CART>;
export const clearCart = withMatcher(
  (): ClearCart => createAction(CART_ACTION_TYPES.CLEAR_CART)
);
