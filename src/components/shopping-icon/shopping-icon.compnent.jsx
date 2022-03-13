import React from 'react';
import './shopping-icon.styles.scss'
import { ReactComponent as ShoppingIcon} from '../../assets/124 shopping-bag.svg'
import { connect } from 'react-redux'
import toggleCartHidden from '../../redux/cart/cart.actions'


const CartIcon = ({toggleCartHidden}) => (
    <div onClick={toggleCartHidden} className="cart-icon">
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon)