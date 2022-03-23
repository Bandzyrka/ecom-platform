import React from 'react';
import { ReactComponent as Logo } from '../../assets/086 crown.svg'
import { connect } from 'react-redux'
import CartIcon from '../shopping-icon/shopping-icon.compnent'
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { signOutStart } from '../../redux/user/user.actions';
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles.jsx'

const Header = ({currentUser, hidden, signOutStart}) => ( 
    <HeaderContainer>
        <LogoContainer to='/'> 
            <Logo/> 
        </LogoContainer>
        
        <OptionsContainer>
            <OptionLink to='/shop'> SHOP </OptionLink>
            <OptionLink to='/'> CONTACT </OptionLink>
            {
                currentUser ?
                <OptionLink as='div' onClick={signOutStart}> SIGN OUT </OptionLink> 
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
const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
  });

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header);