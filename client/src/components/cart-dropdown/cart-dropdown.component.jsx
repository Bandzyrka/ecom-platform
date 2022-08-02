import React from 'react'

import { connect } from 'react-redux'
import {selectCartItems} from '../../redux/cart/cart.selectors'

import { useNavigate } from "react-router-dom";

import { toggleCartHidden } from '../../redux/cart/cart.actions'
import CartItem from '../cart-item/cart-item.component'
import {CartDropdownContainer, CartDropdownItems, CheckoutButton, EmptyMessage} from './cart-dropdown.styles.jsx'


export const CartDropdown = ({ cartItems, dispatch }) =>{
    let navigate = useNavigate();
    return(
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
                navigate('/checkout')
                dispatch(toggleCartHidden())
            }}> 
            Go to Checkout 
        </CheckoutButton>
    </CartDropdownContainer>
)}
const mapStateToProps = state => ({cartItems: selectCartItems(state)})
export default connect(mapStateToProps)(CartDropdown);