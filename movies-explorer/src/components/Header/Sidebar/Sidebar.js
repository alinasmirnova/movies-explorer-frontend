import InternalLink from '../../InternalLink';
import List from '../../List';
import Account from '../Account';
import Button from '../../Button';
import './Sidebar.css';

function Sidebar({visible, onClose}) {

    return (
        <div className={`sidebar-container ${visible ? "sidebar-container_visible" : "sidebar-container_hidden"}`}>
            <div className="sidebar">
                <Button className="sidebar__close-button" onClick={onClose}/>
                <List className="sidebar__links">
                    <InternalLink className="sidebar__link" to="/">Главная</InternalLink>
                    <InternalLink className="sidebar__link" to="/movies">Фильмы</InternalLink>
                    <InternalLink className="sidebar__link" to="/saved-movies">Сохраненные фильмы</InternalLink>
                </List>
                <Account />
            </div>
        </div>
    );
}

export default Sidebar;