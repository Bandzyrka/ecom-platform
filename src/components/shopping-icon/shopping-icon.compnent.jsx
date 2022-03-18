import React from 'react';

import { ReactComponent as ShoppingIcon} from '../../assets/124 shopping-bag.svg'
import { connect } from 'react-redux'

import {toggleCartHidden} from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import {CartIconContainer, ShoppingIconContainer, ItemCounter } from './shopping-icon.styles'

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <CartIconContainer onClick={toggleCartHidden}>
    <ShoppingIconContainer>
        <ShoppingIcon/>
    </ShoppingIconContainer>    
    <ItemCounter>
        {itemCount}
    </ItemCounter>
    </CartIconContainer>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)