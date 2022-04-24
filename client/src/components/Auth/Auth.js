import React, { useState } from 'react'
import './Auth.css';
import logo from '../../assets/logo1.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';


function Auth() {
    const isSignup = false;
    const [pwd, setPwd] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const submitHandler = () => {

    }

    const changeHandler = () => {

    }
    return (
        <div className='auth__container'>
            <div className='auth__deco'></div>
            <div className='auth__info'>
                <form onSubmit={submitHandler} className='auth__form'>
                    <img className='auth__logo' src={logo} alt='logo' />
                    <h5 className='auth__signInUP'>{isSignup ? 'Sign Up' : 'Sign In'}</h5>
                    <h6 className='auth__words'>{isSignup ? 'Join us to view and share more recipe!' : 'Welcome back! Please enter your details.'}</h6>
                    <div className='auth__subContainer'>
                        {isSignup && (
                            <div className='auth__name'>
                                <label className='auth__firstN'>
                                    <span>First Name</span>
                                    <input onChange={e => setFirstName(e.target.value)} value={firstName} placeholder='Zhen Ning' type='text' name='firstName' required />
                                </label>
                                <label className='auth__LastN'>
                                    <span>Last Name</span>
                                    <input onChange={e => setLastName(e.target.value)} value={lastName} placeholder='Low' type='text' name='LastName' required />
                                </label>
                            </div>
                        )}

                        <label className='auth__email'>
                            <span>Email</span>
                            <input onChange={e => setEmail(e.target.value)} value={email} placeholder='Enter your email' type='email' name='email' required />
                        </label>
                        <label className='auth__password'>
                            <span>Password</span>
                            <div tabIndex="0">
                                <input onChange={e => setPwd(e.target.value)} type={showPassword ? "text" : "password"} value={pwd} name='password' required />
                                <FontAwesomeIcon onClick={() => setShowPassword(prevState => !prevState)} className='auth__showpwd' icon={showPassword ? faEye : faEyeSlash} />
                            </div>
                        </label>
                        {isSignup && (
                            <label className='auth__confirmPassword'>
                                <span>Repeat Password</span>
                                <div tabIndex="0">
                                    <input onChange={e => setConfirmPassword(e.target.value)} type={showConfirmPassword ? "text" : "password"} value={confirmPassword} name='confirmPassword' required />
                                    <FontAwesomeIcon onClick={() => setShowConfirmPassword(prevState => !prevState)} className='auth__showconfirmpwd' icon={showPassword ? faEye : faEyeSlash} />
                                </div>
                            </label>
                        )}
                        {isSignup ? (<button className='auth__login'>Sign Up</button>) : (<>
                            <button className='auth__login'>Log In</button>
                            <a href="/" rel="forgetPassword" className='auth__forget'>Forget password ?</a>
                            <div className='auth__createAcc'>
                                {/* <span>New to Comfort Food ?</span> */}
                                <a href="/" rel="createAccount">Create an account for free</a>
                            </div>
                        </>)}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Auth