import React from "react";
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const StripeCheckoutButton = ({ price }) =>
{ 
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51Ke1ggC8atD7eTWGWS2hD3JKu7g5crnDAh6nePKlx5JmIdB3DpPfxQkKk4a6zwtbXUH5Q1VUcv7BgNkbCMDxWWPc00nSrsSErw'
    
    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token
            }
        }).then(response => {
            alert('Payment successful')
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error))
            alert(
                'There was an issue with your payment, please use provided credentials'
            )
        })
    }
    return (
        <StripeCheckout 
            label = 'Pay Now &#x1F4B3;'
            name = 'E-comerce platform'
            billingAddress
            shippingAddress
            image = 'https://e7.pngegg.com/pngimages/997/506/png-clipart-computer-icons-crown-crown-svg-free-black-crown-image-file-formats-king.png'
            description = {`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;