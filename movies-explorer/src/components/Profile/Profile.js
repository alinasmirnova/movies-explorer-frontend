import { useEffect, useState } from 'react';
import Button from '../Button';
import Header from '../Header';
import InternalLink from '../InternalLink';
import List from '../List';
import Field from './Field';
import './Profile.css'

function Profile({ onLogout, loggedIn }) {
    const [userInfo, setUserInfo] = useState('');
    const logout = () => {
        onLogout();
    };

    useEffect(() => {
        setUserInfo({ 
            name: 'Виталий',
            email: 'pochta@yandex.ru'
        })
    }, []);

    return (
        <div className="profile">
            <Header isLoggedIn={loggedIn} />
            <main className="profile__container">
                <h1 className="profile__name">Привет, {userInfo.name}!</h1>
                <div className="profile__fields">
                    <Field title="Имя">{userInfo.name}</Field>
                    <Field title="E-mail" underlined={false}>{userInfo.email}</Field>
                </div>
                <List className="profile__actions">
                    <InternalLink className="profile__edit" to="/edit-profile">Редактировать</InternalLink>
                    <Button className="profile__logout" onClick={logout}>Выйти из аккаунта</Button>
                </List>
            </main>
        </div>        
    );
}

export default Profile;