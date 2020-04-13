import React from 'react';
import Signin from '../../components/sign-in/signin.component';
import SignUp from '../../components/sign-up/sign-up.component';


import './signin-and-signup.styles.scss'

const SigninSignup = () => (
    <div className='sign-in-and-sign-up'>
        <Signin />
        <SignUp />
    </div>
)


export default SigninSignup;