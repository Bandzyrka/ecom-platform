import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import './cart-dropdown.styles.scss'
import { connect } from 'react-redux'
import CartItem from '../cart-item/cart-item.component'
import {selectCartItems} from '../../redux/cart/cart.selectors'
import { withRouter }from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart.actions.js'

const CartDropdown = ({ cartItems, history, dispatch }) =>
(
    <div className="cart-dropdown">
        {
        cartItems.length ?
        (
            <div className="cart-items"> 
            {
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
            }
            </div>
        )
        : <span className="empty-message"> Your cart is empty </span>
        }
        <CustomButton onClick={() => {
                history.push('/checkout')
                dispatch(toggleCartHidden())
            }}> 
            Go to Checkout 
        </CustomButton>
    </div>
)
const mapStateToProps = state => ({cartItems: selectCartItems(state)})
export default withRouter(connect(mapStateToProps)(CartDropdown));