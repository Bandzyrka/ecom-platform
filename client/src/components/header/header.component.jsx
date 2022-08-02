import React, {Fragment} from 'react';
import { ReactComponent as Logo } from '../../assets/086 crown.svg'
import { connect } from 'react-redux'
import CartIcon from '../shopping-icon/shopping-icon.compnent'
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { signOutStart } from '../../redux/user/user.actions';
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles'
import { Outlet } from 'react-router-dom';

export const Header = ({currentUser, hidden, signOutStart}) => ( 
    <Fragment>
    <HeaderContainer>      
        <OptionsContainer>
        {
            currentUser ?
            <OptionLink as='div' onClick={signOutStart}> SIGN OUT </OptionLink> 
            :
            <OptionLink to='signin'> SIGN IN </OptionLink> 
        }
            <LogoContainer to='/'> 
                <Logo/> 
            </LogoContainer>
        
                <OptionLink to='shop'> SHOP </OptionLink>
            </OptionsContainer>
        <CartIcon />
        {
            hidden ?
            null
            : <CartDropdown />
        }
    </HeaderContainer>
    <Outlet />
    </Fragment>
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