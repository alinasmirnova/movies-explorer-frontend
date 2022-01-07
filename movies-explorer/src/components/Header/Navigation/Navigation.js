import { Link } from "react-router-dom";
import List from "../../List";
import './Navigation.css';

function Navigation() {
    return (
        <List className="navigation">
            <Link className="navigation__link" to="/movies">Фильмы</Link>
            <Link className="navigation__link" to="/saved-movies">Сохраненные фильмы</Link>
        </List>
    );
}

export default Navigation;