import { useState } from 'react';
import InternalLink from '../InternalLink';
import logo from '../../images/logo.svg';
import UserForm from '../UserForm';
import { UserName, Email, Password } from '../EditableFields';
import './Register.css';
import { signIn, signUp } from '../../utils/mainApi';
import { useNavigate } from 'react-router-dom';

function Register({onLoggedIn}) {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [submitErrorText, setSubmitErrorText] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        signUp({
            name: userName,
            email: userEmail,
            password: userPassword,
        })
        .then((res) => {
            signIn({
                email: userEmail,
                password: userPassword,
            })
            .then((res) => {
                onLoggedIn(res);
                navigate('/movies');
            });                       
        })
        .catch((err) => {
            setSubmitErrorText(err.message);
        })
    };

    const handleNameChange = (name) => {
        setUserName(name);
    }

    const handleEmailChange = (email) => {
        setUserEmail(email);
    }

    const handlePasswordChange = (password) => {
        setUserPassword(password);
    }    

    return (
        <div className="register">            
            <main className="register__container">
                <InternalLink className="register__logo" to="/">
                    <img src={logo} alt="Учебный проект" />
                </InternalLink>
                <UserForm name="register" title="Добро пожаловать!" submitText="Зарегистрироваться" onSubmit={handleSubmit} submitErrorText={submitErrorText}>
                    <UserName value={userName} onChange={handleNameChange}/>
                    <Email value={userEmail} onChange={handleEmailChange}/>
                    <Password value={userPassword} onChange={handlePasswordChange}/>
                </UserForm>
                <p className="register__enter-text">
                    Уже зарегистрированы?
                    <InternalLink className="register__enter-link" to="/signin">Войти</InternalLink>                    
                </p>             
            </main>
        </div>        
    );
}

export default Register;