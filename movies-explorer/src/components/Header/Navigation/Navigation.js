import { Link } from "react-router-dom";
import RowList from "../../HorizontalList";
import './Navigation.css';

function Navigation() {
    return (
        <RowList className="navigation">
            <Link className="navigation__link" to="#">Фильмы</Link>
            <Link className="navigation__link" to="#">Сохраненные фильмы</Link>
        </RowList>
    );
}

export default Navigation;