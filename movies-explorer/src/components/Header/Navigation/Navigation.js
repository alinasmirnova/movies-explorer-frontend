import List from "../../List";
import InternalLink from "../../InternalLink";
import './Navigation.css';

function Navigation({active}) {
    return (
        <nav className="navigation">
            <List className="navigation__links">
            <InternalLink className={`navigation__link ${active === 'movies' ? 'navigation__link_active' : ''}`} to="/movies">Фильмы</InternalLink>
            <InternalLink className={`navigation__link ${active === 'saved-movies' ? 'navigation__link_active' : ''}`} to="/saved-movies">Сохраненные фильмы</InternalLink>
            </List>
        </nav>    
    );
}

export default Navigation;