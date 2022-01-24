import { HashLink as Link } from 'react-router-hash-link';
import List from "../../../List";
import './NavTab.css';

function NavTab({className}) {
    return (
        <List className={`nav-tab ${className}`}>
            <Link to="#about" className="nav-tab__item">О проекте</Link>
            <Link to="#techs" className="nav-tab__item">Технологии</Link>
            <Link to="#student" className="nav-tab__item">Студент</Link>
        </List>
    );
}

export default NavTab;