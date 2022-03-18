import React, { Component } from 'react';
import { auth, createUserProfileDocument} from '../../firebase/firebase.utils'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'

import {SignUpContainer, TitleContainer} from './sign-up.styles.jsx'


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
    handleSubmit = async event => {
        event.preventDefault()
        const {displayName, password, email, confirmPassword} = this.state;
        
        if(password !== confirmPassword){
            alert('Passwords dont match');
            return;    
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, {displayName})
            this.setState({password: '', email: '', displayName: '', confirmPassword: ''});
        } catch (error) {
            console.log('eror creating user with pass and email',error.message);
        }
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

export default SignUp;