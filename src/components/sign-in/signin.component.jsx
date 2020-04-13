import React from 'react';
import './signin.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component'

import {signInWithGoogle} from '../../firebase/firebase.utils'

class Signin extends React.Component{
    constructor(props){
        super(props)

    this.state = {
        email: '',
        password: ''
    }

   }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email:'', password:''})
    }

    handleChange = event =>{
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }


    render(){
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with email and password</span>

                <form action="" onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange} label="email" type="email" name="email" value={this.state.email} required/>

                    <FormInput handleChange={this.handleChange} label="password" type="password"  name="password" value={this.state.password} required/>
                    <div className="buttons">
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }

    
}


export default Signin;