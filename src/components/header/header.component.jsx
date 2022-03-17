import React from 'react';
import { ReactComponent as Logo } from '../../assets/086 crown.svg'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import CartIcon from '../shopping-icon/shopping-icon.compnent'
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv} from './header.styles.jsx'

const Header = ({currentUser, hidden}) => ( 
    <HeaderContainer>
        <LogoContainer to='/'> 
            <Logo/> 
        </LogoContainer>
        
        <OptionsContainer>
            <OptionLink to='/shop'> SHOP </OptionLink>
            <OptionLink to='/'> CONTACT </OptionLink>
            {
                currentUser ?
                <OptionDiv onClick={() => auth.signOut()}> SIGN OUT </OptionDiv> 
                :
                <OptionLink to='/signin'> SIGN IN </OptionLink> 
            }
            <CartIcon />
        </OptionsContainer>
            
        {
            hidden ?
            null
            : <CartDropdown />
        }
    </HeaderContainer>
)
const mapStateToProps = ({user: { currentUser }, cart: {hidden}}) => ({
    currentUser,
    hidden
})


export default connect(mapStateToProps)(Header);