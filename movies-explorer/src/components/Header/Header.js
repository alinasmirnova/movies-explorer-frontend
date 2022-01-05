import './Header.css';
import Navigation from './Navigation';
import Auth from './Auth';
import logo from'../../images/logo.svg'

function Header() {
    return (
        <div className="header">
            <img className="header__logo" src={logo} alt="Учебный проект" />
            <Navigation />
            <Auth className="header__auth" />
        </div>
    );
}

export default Header;