import Navigation from './Navigation';
import Auth from './Auth';
import InternalLink from '../InternalLink';
import logo from'../../images/logo.svg'
import './Header.css';

function Header() {
    return (
        <section className="header">
            <InternalLink className="header__logo" to="/">
                <img src={logo} alt="Учебный проект" />
            </InternalLink>
            <Navigation />
            <Auth className="header__auth" />
        </section>
    );
}

export default Header;