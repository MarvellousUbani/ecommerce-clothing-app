import React from 'react';
import { connect } from 'react-redux';

import './signin.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component'

import { googleSignInStart, emailSignInStart} from '../../redux/user/user.actions';

class Signin extends React.Component{
    constructor(props){
        super(props)

    this.state = {
        email: '',
        password: ''
    }

   }

    handleSubmit = async event => {
        event.preventDefault();
        const {emailSignInStart} = this.props;
        const {email, password} = this.state;
        
        emailSignInStart(email, password);
       
    }

    handleChange = event =>{
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }


    render(){
        const {googleSignInStart} = this.props;
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with email and password</span>

                <form action="" onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange} label="email" type="email" name="email" value={this.state.email} required/>

                    <FormInput handleChange={this.handleChange} label="password" type="password"  name="password" value={this.state.password} required/>
                    <div className="buttons">
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Sign in with google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }

    
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: ()  => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(Signin);