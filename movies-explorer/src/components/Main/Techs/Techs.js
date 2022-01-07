import SectionTitle from '../SectionTitle';
import List from '../../List';
import './Techs.css';

function Techs() {
    return (
        <section className="techs">
            <SectionTitle>Технологии</SectionTitle>
            <div className='techs__body'>
                <h2 className="techs__header">7 технологий</h2>
                <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <List className="techs__list">
                    <span className="techs__list-item">HTML</span>
                    <span className="techs__list-item">CSS</span>
                    <span className="techs__list-item">JS</span>
                    <span className="techs__list-item">React</span>
                    <span className="techs__list-item">Git</span>
                    <span className="techs__list-item">Express.js</span>
                    <span className="techs__list-item">mongoDB</span>
                </List>
            </div>
            
        </section>
    );
}

export default Techs;