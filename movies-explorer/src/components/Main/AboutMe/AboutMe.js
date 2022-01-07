import SectionTitle from "../SectionTitle";
import List from "../../List";
import photo from "../../../images/photo.jpg";
import ExternalLink from "../../ExternalLink";
import "./AboutMe.css";

function AboutMe() {
    return (
        <section className="about-me" id="student">
            <SectionTitle>Студент</SectionTitle>
            <div className="about-me__main">
                <h2 className="about-me__name">Алина</h2>
                <p className="about-me__about">Full-stack разработчик, 28 лет</p>
                <p className="about-me__description">Я живу в Санкт-Петербурге. Закончила бакалавриат и магистратуру по направлению «Программная инженерия» в АлтГТУ им. И.И. Ползунова в г. Барнауле. С 2015 года работаю бэкенд-разработчиком на стеке .NET. Тимлид в одной из подкоманд проекта Удостоверяющий Центр. Закончила курс по веб-разработке, чтобы начать освоение соседнего стека.</p>
                <img className="about-me__photo" src={photo} alt="Алина Смирнова"/>
                <List className="about-me__links">
                    <ExternalLink className="about-me__link" href="https://github.com/alinasmirnova">Github</ExternalLink>
                    <ExternalLink className="about-me__link" href="https://www.instagram.com/alinasmirnova915/">Instagram</ExternalLink>
                </List>                
            </div>            
        </section>
    );
}

export default AboutMe;