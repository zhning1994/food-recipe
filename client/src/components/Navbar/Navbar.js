import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import Avatar from 'react-avatar';
import decode from 'jwt-decode';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux'


function Navbar() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location])

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        history.push('/');
        setUser(null);
    }

    return (
        <>
            {user?.result ? (
                <div className='navbar__container'>
                    <div className='navbar__avatar'>
                        <Avatar className='navbar__subavatar' color='#219ebc' style={{ fontWeight: "bold" }} size="40" round={true} name={user?.result.name.charAt(0)} googleId={user?.result.googleId} alt={user?.result.name} />
                        {/* <img className='navbar__avatar' src={user?.result.imageUrl} alt={user?.result.name} /> */}
                        <h6 className='navbar__name'>{user?.result.name}</h6>
                    </div>
                    <button className='navbar__btn' onClick={logout}>Logout</button>

                </div>
            ) : (<div>
                <Link to='/auth'>
                    <button className='navbar__btn'>Sign In</button>
                </Link>
            </div>)}
        </>
    )
}

export default Navbar;