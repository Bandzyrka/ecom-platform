import React from "react";
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) =>
{ 
const onToken = token => {
    console.log(token);
    alert('Successfull Payment')
    } 
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51Ke1ggC8atD7eTWGWS2hD3JKu7g5crnDAh6nePKlx5JmIdB3DpPfxQkKk4a6zwtbXUH5Q1VUcv7BgNkbCMDxWWPc00nSrsSErw'
    
    return (
        <StripeCheckout 
            classNam    e='stripe-button'
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