import SectionTitle from "../SectionTitle";
import './AboutProject.css'

function AboutProject() {
    return (
        <section className="about-project" id="about">
            <SectionTitle>О проекте</SectionTitle>
            <div className="about-project__description">
                <div className="about-project__paragraph">
                    <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
                    <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about-project__paragraph">
                    <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
                    <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="about-project__schedule">
                <p className="about-project__week-number about-project__week-number_one">1 неделя</p>
                <p className="about-project__week-number about-project__week-number_two">4 недели</p>
                <p className="about-project__part">Back-end</p>
                <p className="about-project__part">Front-end</p>
            </div>
        </section>
    );
}

export default AboutProject;