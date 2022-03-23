import React, { Component } from 'react';
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'
import { connect } from 'react-redux'
import {SignUpContainer, TitleContainer} from './sign-up.styles.jsx'
import { signUpStart } from '../../redux/user/user.actions'

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            confirmPassword: '',
            password: '',
            email: '',
        }
    }
    handleSubmit = event => {
        event.preventDefault()
        const {displayName, password, email, confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert('Passwords dont match');
            return;    
        }
        const {signUpStart} = this.props
        signUpStart({ displayName, email, password });
    }
    handleChange = event => {
        const {value, name} = event.target
        this.setState({[name]: value});
    }
    render() {
        const {displayName, password, email, confirmPassword} = this.state;
        return (
            <SignUpContainer>
                <TitleContainer> I do not have a account </TitleContainer>
                <span className="subtitle"> Sign up using your email and password </span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"  
                        name="displayName" 
                        value={displayName} 
                        onChange={this.handleChange} 
                        required 
                        label = "Display Name" 
                        />
                    <FormInput
                        type="email"  
                        name="email" 
                        value={email} 
                        onChange={this.handleChange} 
                        required 
                        label = "email" 
                        />
                    <FormInput
                        type="password"  
                        name="password" 
                        value={password} 
                        onChange={this.handleChange} 
                        required 
                        label = "Password" 
                        />
                    <FormInput
                        type="password"  
                        name="confirmPassword" 
                        value={confirmPassword} 
                        onChange={this.handleChange} 
                        required 
                        label = "Confirm Password" 
                        />
                        <CustomButton type= "submit"> Sign Up</CustomButton>    
                </form> 
            </SignUpContainer>  
        );
    }
}
const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
  });
  
  export default connect(
    null,
    mapDispatchToProps
  )(SignUp);