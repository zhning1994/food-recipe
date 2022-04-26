import './Header.css';
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Button from '../../UI/Button.js';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar.js';

function Header() {
    return (
        <header className='header'>
            <img className='header__logo' src={logo} alt='logo' />
            <div className='header__itemsContainer'>
                <ul className='header__itemContainer'>
                    <li className='header__item'>Home</li>
                    <li className='header__item'>About</li>
                    <li className='header__item'>Recipe</li>
                    <li className='header__item'>Contact</li>
                </ul>
            </div>
            <div>
                <FontAwesomeIcon size='xl' icon={faMagnifyingGlass} />
            </div>
            <Navbar />
        </header>

    )
}

export default Header