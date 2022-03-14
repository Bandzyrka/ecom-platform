export const addItemToCart = (cartItems, cartItemToAdd) => {
    const doesExist = cartItems.find(item => item.id === cartItemToAdd.id)
    if(doesExist) {
        return(cartItems.map(
            cartItem => cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity +1} : cartItem
            ))
    }
    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}