import './Header.css';
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Button from '../../UI/Button.js';

function Header() {
    return (
        <header className=''>
            <img src='' alt='' />
            <div className=''>
                <ul className=''>
                    <li className=''>Home</li>
                    <li className=''>About</li>
                    <li className=''>Recipe</li>
                    <li className=''>Contact</li>
                </ul>
            </div>
            <div>
                <FontAwesomeIcon size='xl' icon={faMagnifyingGlass} />
            </div>
            <div>
                <Button>Sign In</Button>
            </div>

        </header>

    )
}

export default Header