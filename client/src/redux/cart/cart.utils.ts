import { CartItem } from "./cart.types";
import { CollectionItem } from "../shop/shop.types";

export const addItemToCart = (
  cartItems: CartItem[],
  cartItemToAdd: CollectionItem
): CartItem[] => {
  const doesExist = cartItems.find((item) => item.id === cartItemToAdd.id);
  if (doesExist) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (
  cartItems: CartItem[],
  cartItemToRemove: CartItem
): CartItem[] => {
  const doesExist = cartItems.find((item) => item.id === cartItemToRemove.id);
  if (doesExist && doesExist.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
