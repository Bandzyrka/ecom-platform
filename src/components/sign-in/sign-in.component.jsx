import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

import {SignInContainer, ButtonsContainer} from './sign-in.styles.jsx'
class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            email: '',
        }
    }
    handleChange = (event) => {
        const {value, name} = event.target
        this.setState({[name]: value});
    }
    handleSubmit = async event => {
        event.preventDefault()
        const {password, email} = this.state
        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({password: '', email: ''});
        } catch (error) {
            console.error('error signing user',error.message)
        }
        
        
    }    
    
    render() {
        return (
            <SignInContainer>
                <h2 className="title"> Create a new account</h2>
                <span className="subtitle"> Use your email and password to sing in</span>
                    <form onSubmit={this.handleSubmit}>
                        <FormInput
                            type="email"  
                            name="email" 
                            value={this.state.email} 
                            onChange={this.handleChange} 
                            required 
                            label = "email"
                            />
                        <FormInput 
                            type="password"  
                            name="password" 
                            value={this.state.password} 
                            onChange={this.handleChange} 
                            required 
                            label="password"
                            />
                        <ButtonsContainer>
                            <CustomButton type= "submit"> Sign In</CustomButton>
                            <CustomButton type="button" onClick={signInWithGoogle} styles='googleButtonStyle'> Sign In With Google </CustomButton> 
                        </ButtonsContainer>
                    </form>
            </SignInContainer>
        );
    }
}

export default SignIn