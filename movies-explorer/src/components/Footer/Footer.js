import List from '../List';
import './Footer.css';

function Footer() {
    return (
        <section className="footer">
            <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__line"/>
            <div className="footer__additions">
                <p className="fooer__year">© 2022</p>
                <List className="footer__links">
                    <a className="footer__link" href="https://practicum.yandex.ru" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
                    <a className="footer__link" href="https://github.com/alinasmirnova" target="_blank" rel="noreferrer">Github</a>
                    <a className="footer__link" href="https://www.instagram.com/alinasmirnova915/" target="_blank" rel="noreferrer">Instagram</a>
                </List>
            </div>
        </section>
    );
}

export default Footer;