import { CollectionItem } from "../shop/shop.types";

export enum CART_ACTION_TYPES {
  TOGGLE_CART_HIDDEN = "TOGGLE_CART_HIDDEN",
  ADD_ITEM = "ADD_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
  CLEAR_ITEM_FROM_CART = "CLEAR_ITEM_FROM_CART",
  CLEAR_CART = "CLEAR_CART",
}

export type CartItem = CollectionItem & { quantity: number };
