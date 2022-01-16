import Button from '../Button';
import './ErrorModal.css'

function ErrorModal({message, onClose}) {
    return (
        <div className="error-modal-container">
            <div className="error-modal">
                <Button className="error-modal__close-button" onClick={onClose}/>
                <p className="error-modal__message">{message}</p>
            </div>
        </div>
    );
}

export default ErrorModal;