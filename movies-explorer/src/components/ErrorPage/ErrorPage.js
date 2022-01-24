import { Navigate, useNavigate } from 'react-router-dom';
import Button from '../Button';
import './ErrorPage.css'

function ErrorPage({error}) {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
    };

    return (
        <main className="error-page">
            <div className="error-page__error">
                <h1 className="error-page__error-code">{error.code}</h1>
                <p className="error-page__error-text">{error.message}</p>
            </div>
            <Button className="error-page__back" onClick={handleBackClick}>Назад</Button>
        </main>
    );
}

export default ErrorPage;