import { Link } from "react-router-dom";
import RowList from "../../../HorizontalList";
import './NavTab.css';

function NavTab({className}) {
    return (
        <RowList className={`nav-tab ${className}`}>
            <Link to="#" className="nav-tab__item">О проекте</Link>
            <Link to="#" className="nav-tab__item">Технологии</Link>
            <Link to="#" className="nav-tab__item">Студент</Link>
        </RowList>
    );
}

export default NavTab;