import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss'
import CustomButton from '../../components/custom-button/custom-button.component'

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
    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({password: '', email: ''});
    }    
    
    render() {
        return (
            <div className="sign-in">
            <h2> Create a new account</h2>
            <span> Use your email and password to sing in</span>
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
                    <CustomButton type="submit"> Sign In</CustomButton> 
                </form>
            </div>
        );
    }
}

export default SignIn