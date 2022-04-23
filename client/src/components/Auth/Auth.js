import React from 'react'
import './Auth.css';
import logo from '../../assets/logo1.svg';

function Auth() {
    const isSignup = false;
    return (
        <div className='auth__container'>
            <div className='auth__deco'></div>
            <div className='auth__info'>
                <form className='auth__form'>
                    <img className='auth__logo' src={logo} alt='logo' />
                    <h5 className='auth__signInUP'>{isSignup ? 'Sign Up' : 'Sign In'}</h5>
                    <h6 className='auth__words'>Welcome back! Please enter your details.</h6>
                    <div className='auth__subContainer'>
                        <label className='auth__email'>
                            <span>Email</span>
                            <input placeholder='Enter your email' type='email' name='email' />
                        </label>
                        <label className='auth__password'>
                            <span>Password</span>
                            <input type='password' name='password' />
                        </label>
                        <button className='auth__login'>Log In</button>
                        <a href="/" rel="forgetPassword" className='auth__forget'>Forget password ?</a>
                        <div className='auth__createAcc'>
                            {/* <span>New to Comfort Food ?</span> */}
                            <a href="/" rel="createAccount">Create an account for free</a>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Auth