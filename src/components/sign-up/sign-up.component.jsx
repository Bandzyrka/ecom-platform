import React, { Component } from 'react';
import { auth, createUserProfileDocument} from '../../firebase/firebase.utils'
import './sign-up.styles.scss'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'

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
        
        if(password != confirmPassword){
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
            <div className="sign-up">
                <h2 className="title"> I do not have a account </h2>
                <span className="subtitle"> Sign up using ypu email and password </span>
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
            </div>  
        );
    }
}

export default SignUp;