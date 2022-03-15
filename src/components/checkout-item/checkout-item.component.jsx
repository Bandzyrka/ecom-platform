import React from 'react';
import './checkout-item.styles.scss'
import { connect } from 'react-redux';
import { clearItem, addItem, removeItem } from '../../redux/cart/cart.actions'
const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) =>
{
    const {imageUrl, name, quantity, price} = cartItem;
    
    return(
    <div className= "checkout-item">
        <div className= "image-container">
            <img src={imageUrl} alt="item" />
        </div>
        <span className= "name">{name}</span>
        <div className= "quantity">
            <div className= "arrow" onClick={() => removeItem(cartItem)}> &#10094; </div>
             <span> {quantity} </span>
            <div className= "arrow" onClick={() => addItem(cartItem)}> &#10095; </div>
        </div>
        <span className= "price">{price}$</span>
        <div className= "remove-button" onClick={() => clearItem(cartItem)} > &#10006;</div>
    </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItem(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))  
})
export default connect(null, mapDispatchToProps)(CheckoutItem)