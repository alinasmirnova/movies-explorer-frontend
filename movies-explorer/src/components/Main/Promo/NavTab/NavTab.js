import { Link } from "react-router-dom";
import List from "../../../List";
import './NavTab.css';

function NavTab({className}) {
    return (
        <List className={`nav-tab ${className}`}>
            <Link to="#" className="nav-tab__item">О проекте</Link>
            <Link to="#" className="nav-tab__item">Технологии</Link>
            <Link to="#" className="nav-tab__item">Студент</Link>
        </List>
    );
}

export default NavTab;