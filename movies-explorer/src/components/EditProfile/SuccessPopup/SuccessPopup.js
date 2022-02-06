import Button from '../../Button';
import './SuccessPopup.css'

function SuccessPopup({onClose}) {
    return (
        <div className="success-popup-container">
            <div className="success-popup">
                <Button className="success-popup__close-button" onClick={onClose}/>
                <p className="success-popup__message">Данные успешно отредактированы</p>
                <Button className="success-popup__ok-button" onClick={onClose}>Ок</Button>
            </div>
        </div>
    );
}

export default SuccessPopup;