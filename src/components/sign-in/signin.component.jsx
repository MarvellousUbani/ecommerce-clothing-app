import React, {useState} from 'react';
import { connect } from 'react-redux';

import './signin.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component'

import { googleSignInStart, emailSignInStart} from '../../redux/user/user.actions';

const Signin = ({emailSignInStart, googleSignInStart}) => {
    const [userCredentials, setCredentials] = useState({email:'', password: ''})

    const {email, password} = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        
        emailSignInStart(email, password);
       
    }

    const handleChange = event => {
        const { value, name } = event.target;

        setCredentials({ ...userCredentials, [name]: value })
    }

        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with email and password</span>

                <form action="" onSubmit={handleSubmit}>
                    <FormInput handleChange={handleChange} label="email" type="email" name="email" value={email} required/>

                    <FormInput handleChange={handleChange} label="password" type="password"  name="password" value={password} required/>
                    <div className="buttons">
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Sign in with google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }


const mapDispatchToProps = dispatch => ({
    googleSignInStart: ()  => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(Signin);