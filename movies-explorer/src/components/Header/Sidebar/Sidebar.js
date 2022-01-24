import InternalLink from '../../InternalLink';
import List from '../../List';
import Account from '../Account';
import Button from '../../Button';
import './Sidebar.css';

function Sidebar({visible, onClose, active}) {

    return (
        <div className={`sidebar-container ${visible ? "sidebar-container_visible" : "sidebar-container_hidden"}`}>
            <div className="sidebar">
                <Button className="sidebar__close-button" onClick={onClose}/>
                <List className="sidebar__links">
                    <InternalLink className={`sidebar__link ${active === 'main' ? 'sidebar__link_active' : ''}`} to="/">Главная</InternalLink>
                    <InternalLink className={`sidebar__link ${active === 'movies' ? 'sidebar__link_active' : ''}`} to="/movies">Фильмы</InternalLink>
                    <InternalLink className={`sidebar__link ${active === 'saved-movies' ? 'sidebar__link_active' : ''}`} to="/saved-movies">Сохраненные фильмы</InternalLink>
                </List>
                <Account />
            </div>
        </div>
    );
}

export default Sidebar;