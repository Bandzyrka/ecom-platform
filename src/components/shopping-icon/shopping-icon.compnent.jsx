import React from 'react';
import './shopping-icon.styles.scss'
import { ReactComponent as ShoppingIcon} from '../../assets/124 shopping-bag.svg'



const CartIcon = () => (
    <div className="cart-icon">
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">0</span>
    </div>
    
    
)

export default CartIcon