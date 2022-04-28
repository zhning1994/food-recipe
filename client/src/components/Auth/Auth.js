import React, { useState } from 'react'
import './Auth.css';
import logo from '../../assets/logo1.svg';
import google from '../../assets/google.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from "react-redux";
import { signin, signup } from '../../actions/auth.js';

const InitialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

function Auth() {
    const [formData, setFormData] = useState(InitialState);
    const [isSignup, setIsSignup] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault();
        if (isSignup) {
            dispatch(signup(formData, history))
        } else {
            dispatch(signin(formData, history))
        }
    }

    const changeHandler = () => {

    }

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup)
    };

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
        try {
            dispatch({ type: 'AUTH', data: { result, token } });
            history.push('/');
        } catch (error) {
            console.log(error)
        }
    };

    const googleFailure = (error) => {
        console.log(error);
        console.log("Google Sign in was unsuccessful. Try again leter.");
    };

    return (
        <div className='auth__container'>
            <div className='auth__deco'></div>
            <div className='auth__info'>
                <form onSubmit={submitHandler} className='auth__form'>
                    <Link to='/'><img component={Link} to="/" className='auth__logo' src={logo} alt='logo' /></Link>
                    <h5 className='auth__signInUP'>{isSignup ? 'Sign Up' : 'Sign In'}</h5>
                    <h6 className='auth__words'>{isSignup ? 'Join us to view and share more recipe!' : 'Welcome back! Please enter your details.'}</h6>
                    <div className='auth__subContainer'>
                        {isSignup && (
                            <div className='auth__name'>
                                <label className='auth__firstN'>
                                    <span>First Name</span>
                                    <input onChange={e => setFormData({ ...formData, firstName: e.target.value })} value={formData.firstName} placeholder='Zhen Ning' type='text' name='firstName' required />
                                </label>
                                <label className='auth__LastN'>
                                    <span>Last Name</span>
                                    <input onChange={e => setFormData({ ...formData, lastName: e.target.value })} value={formData.lastName} placeholder='Low' type='text' name='lastName' required />
                                </label>
                            </div>
                        )}

                        <label className='auth__email'>
                            <span>Email</span>
                            <input onChange={e => setFormData({ ...formData, email: e.target.value })} value={formData.email} placeholder='Enter your email' type='email' name='email' required />
                        </label>
                        <label className='auth__password'>
                            <span>Password</span>
                            <div tabIndex="0">
                                <input onChange={e => setFormData({ ...formData, password: e.target.value })} type={showPassword ? "text" : "password"} value={formData.password} name='password' required />
                                <FontAwesomeIcon onClick={() => setShowPassword(prevState => !prevState)} className='auth__showpwd' icon={showPassword ? faEye : faEyeSlash} />
                            </div>
                        </label>
                        {isSignup && (
                            <label className='auth__confirmPassword'>
                                <span>Repeat Password</span>
                                <div tabIndex="0">
                                    <input onChange={e => setFormData({ ...formData, confirmPassword: e.target.value })} type={showConfirmPassword ? "text" : "password"} value={formData.confirmPassword} name='confirmPassword' required />
                                    <FontAwesomeIcon onClick={() => setShowConfirmPassword(prevState => !prevState)} className='auth__showconfirmpwd' icon={showConfirmPassword ? faEye : faEyeSlash} />
                                </div>
                            </label>
                        )}
                        {isSignup ? (<button type='submit' className='auth__login'>Sign Up</button>) : (<>
                            <GoogleLogin
                                clientId='135398771906-jrh87cdcabsedfjpd8fgvcg0pfjkan26.apps.googleusercontent.com'
                                render={renderProps => (
                                    <button className='auth__google'
                                        onClick={renderProps.onClick}
                                        disabled={renderProps.disabled}>
                                        <span>Sign In With Google</span>
                                        <img src={google} alt="Google" />
                                    </button>
                                )}
                                onSuccess={googleSuccess}
                                onFailure={googleFailure}
                                cookiePolicy="single_host_origin"
                            />
                            <button className='auth__login'>Log In</button>
                            <a href="/" rel="forgetPassword" className='auth__forget'>Forget password ?</a>
                            <div className='auth__createAcc'>
                                {/* <span>New to Comfort Food ?</span> */}
                                <a onClick={switchMode} rel="createAccount">Create an account for free</a>
                            </div>
                        </>)}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Auth