import List from "../../List";
import InternalLink from "../../InternalLink";
import './Navigation.css';

function Navigation() {
    return (
        <nav className="navigation">
            <List className="navigation__links">
                <InternalLink className="navigation__link" to="/movies">Фильмы</InternalLink>
                <InternalLink className="navigation__link" to="/saved-movies">Сохраненные фильмы</InternalLink>
            </List>
        </nav>    
    );
}

export default Navigation;