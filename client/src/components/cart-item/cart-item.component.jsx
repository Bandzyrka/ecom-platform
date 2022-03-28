import React from 'react'

import {CartItemContainer, ItemDetailsContainer} from './cart-item.styles.jsx'


export const CartItem = ({item: {id, name, imageUrl, quantity, price}}) => (
    <CartItemContainer>
        <img src={imageUrl} alt="item" />
        <ItemDetailsContainer>
            <span>{name}</span>
            <span>{quantity} x {price}$</span>
        </ItemDetailsContainer>
    </CartItemContainer>
)

export default React.memo(CartItem);