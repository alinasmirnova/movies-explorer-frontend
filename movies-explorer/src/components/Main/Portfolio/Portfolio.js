import List from "../../List";
import SiteLink from "./SiteLink";
import "./Portfolio.css";

function Portfolio() {
    return (
        <section className="portfolio">
            <h3 className="portfolio__header">Портфолио</h3>
                <List className="portfolio__sites">
                    <SiteLink to="https://alinasmirnova.github.io/how-to-learn/">Статичный сайт</SiteLink>
                    <SiteLink to="https://alinasmirnova.github.io/russian-travel/">Адаптивный сайт</SiteLink>
                    <SiteLink to="https://asmirnova.nomoredomains.rocks/" underlined={false}>Одностраничное приложение</SiteLink>
                </List>
        </section>
    );
}

export default Portfolio;