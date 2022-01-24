import { useState } from 'react';
import InternalLink from '../InternalLink';
import logo from '../../images/logo.svg';
import UserForm from '../UserForm';
import { Email, Password } from '../EditableFields';
import './Login.css';

function Login() {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [hasErrors, setHasErrors] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleError = (e) => {
        
    }

    const handleEmailChange = (email) => {
        setUserEmail(email);
    }

    const handlePasswordChange = (password) => {
        setUserPassword(password);
    }    

    return (
        <div className="login">            
            <main className="login__container">
                <InternalLink className="login__logo" to="/">
                    <img src={logo} alt="Учебный проект" />
                </InternalLink>
                <UserForm name="login" title="Рады видеть!" submitText="Войти" onSubmit={handleSubmit} hasErrors={hasErrors}>
                    <Email value={userEmail} onChange={handleEmailChange} onError={handleError}/>
                    <Password value={userPassword} onChange={handlePasswordChange} onError={handleError}/>
                </UserForm>
                <p className="login__enter-text">
                    Ещё не зарегистрированы?
                    <InternalLink className="login__enter-link" to="/signup">Регистрация</InternalLink>                    
                </p>             
            </main>
        </div>        
    );
}

export default Login;