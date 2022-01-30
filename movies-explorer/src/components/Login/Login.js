import { useState } from 'react';
import InternalLink from '../InternalLink';
import logo from '../../images/logo.svg';
import UserForm from '../UserForm';
import { Email, Password } from '../EditableFields';
import { signIn } from '../../utils/mainApi';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login({onLoggedIn}) {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [submitErrorText, setSubmitErrorText] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        signIn({
            email: userEmail,
            password: userPassword,
        })
        .then((res) => {
            onLoggedIn();
            navigate('/movies');
        })
        .catch((err) => {
            setSubmitErrorText(err.message);
        })   
    };

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
                <UserForm name="login" title="Рады видеть!" submitText="Войти" onSubmit={handleSubmit} submitErrorText={submitErrorText}>
                    <Email value={userEmail} onChange={handleEmailChange}/>
                    <Password value={userPassword} onChange={handlePasswordChange}/>
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