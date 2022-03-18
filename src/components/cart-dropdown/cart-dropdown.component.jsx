import React from 'react'

import { connect } from 'react-redux'
import {selectCartItems} from '../../redux/cart/cart.selectors'

import { withRouter }from 'react-router-dom'

import { toggleCartHidden } from '../../redux/cart/cart.actions.js'
import CartItem from '../cart-item/cart-item.component'
import {CartDropdownContainer, CartDropdownItems, CheckoutButton, EmptyMessage} from './cart-dropdown.styles.jsx'


const CartDropdown = ({ cartItems, history, dispatch }) =>
(
    <CartDropdownContainer>
        {
        cartItems.length ?
        (
            <CartDropdownItems> 
            {
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
            }
            </CartDropdownItems>
        )
        : <EmptyMessage> Your cart is empty </EmptyMessage>
        }
        <CheckoutButton onClick={() => {
                history.push('/checkout')
                dispatch(toggleCartHidden())
            }}> 
            Go to Checkout 
        </CheckoutButton>
    </CartDropdownContainer>
)
const mapStateToProps = state => ({cartItems: selectCartItems(state)})
export default withRouter(connect(mapStateToProps)(CartDropdown));