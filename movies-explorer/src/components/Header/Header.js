import './Header.css';
import Navigation from './Navigation';
import Auth from './Auth';
import logo from'../../images/logo.svg'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <section className="header">
            <Link className="header__logo" to="/">
                <img src={logo} alt="Учебный проект" />
            </Link>
            <Navigation />
            <Auth className="header__auth" />
        </section>
    );
}

export default Header;