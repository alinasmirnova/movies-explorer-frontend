import ExternalLink from '../ExternalLink';
import List from '../List';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__line"/>
            <div className="footer__additions">
                <p className="fooer__year">© 2022</p>
                <List className="footer__links">
                    <ExternalLink className="footer__link" to="https://practicum.yandex.ru">Яндекс.Практикум</ExternalLink>
                    <ExternalLink className="footer__link" to="https://github.com/alinasmirnova">Github</ExternalLink>
                    <ExternalLink className="footer__link" to="https://www.instagram.com/alinasmirnova915/">Instagram</ExternalLink>
                </List>
            </div>
        </footer>
    );
}

export default Footer;