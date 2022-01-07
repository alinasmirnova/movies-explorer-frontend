import List from "../../List";
import InternalLink from "../../InternalLink";
import './Navigation.css';

function Navigation() {
    return (
        <List className="navigation">
            <InternalLink className="navigation__link" to="/movies">Фильмы</InternalLink>
            <InternalLink className="navigation__link" to="/saved-movies">Сохраненные фильмы</InternalLink>
        </List>
    );
}

export default Navigation;