import { useState } from 'react';
import InternalLink from '../InternalLink';
import logo from '../../images/logo.svg';
import UserForm from '../UserForm';
import { UserName, Email, Password } from '../EditableFields';
import './Register.css';

function Register() {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
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
                <UserForm name="register" title="Добро пожаловать!" submitText="Зарегистрироваться" onSubmit={handleSubmit}>
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