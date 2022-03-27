import React from 'react';

import {CheckoutPageContainer, CheckoutHeaderContainer, HeaderBlockContainer, TotalContainer, WarningMessageContainer, StripeCheckoutContainer} from './checkout-page.styles.jsx'

import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'

import { selectCartItems, selectCartItemsTotal } from '../../redux/cart/cart.selectors'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import StripeCheckoutButton from '../../components/stripe-button/stripe.button.component'

export const CheckoutPage = ({ cartItems, total, }) => (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <HeaderBlockContainer>
                <span>Product</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Description</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Quantity</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Price</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Remove</span>
            </HeaderBlockContainer>
        </CheckoutHeaderContainer>
        {
            cartItems.map(cartItem => <CheckoutItem cartItem={cartItem} key={cartItem.id} />) 
        }
        <TotalContainer>
            <span> TOTAL: {total}$ </span>
        </TotalContainer>
        <StripeCheckoutContainer>
            <StripeCheckoutButton price={total}/>
        </StripeCheckoutContainer>
        <WarningMessageContainer> 
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 02/24 - CVV: 123
        </WarningMessageContainer>
        
    </CheckoutPageContainer>
)
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartItemsTotal
})  

export default connect(mapStateToProps)(CheckoutPage);