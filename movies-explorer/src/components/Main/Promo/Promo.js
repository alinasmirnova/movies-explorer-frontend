import NavTab from './NavTab';
import './Promo.css';

function Promo() {
    return (
        <div className="promo">
            <h1 className='promo__header'>Учебный проект студента факультета Веб-разработки.</h1>
            <NavTab className='promo__nav-tab' />
        </div>
    );
}

export default Promo;