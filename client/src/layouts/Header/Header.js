import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <header className=''>
            <img />
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
                Sign In
            </div>

        </header>

    )
}

export default Header