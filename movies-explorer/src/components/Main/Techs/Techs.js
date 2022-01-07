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
                    <h3 className="techs__list-item">HTML</h3>
                    <h3 className="techs__list-item">CSS</h3>
                    <h3 className="techs__list-item">JS</h3>
                    <h3 className="techs__list-item">React</h3>
                    <h3 className="techs__list-item">Git</h3>
                    <h3 className="techs__list-item">Express.js</h3>
                    <h3 className="techs__list-item">mongoDB</h3>
                </List>
            </div>
            
        </section>
    );
}

export default Techs;