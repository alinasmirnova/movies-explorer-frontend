import { useEffect, useState } from 'react';
import Button from '../Button';
import Header from '../Header';
import './EditProfile.css';
import { UserName, Email } from '../EditableFields';

function EditProfile() {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [hasErrors, setHasErrors] = useState(false);

    useEffect(() => {
        setUserName('Виталий');
        setUserEmail('pochta@yandex.ru');
    }, []);

    const handleSave = (e) => {
        e.preventDefault();
    };

    const handleError = (e) => {
        
    }

    const handleNameChange = (name) => {
        setUserName(name);
    }

    const handleEmailChange = (email) => {
        setUserEmail(email);
    }

    return (
        <>
            <Header isLoggedIn={true} />
            <main className="edit-profile">
                <h1 className="edit-profile__title">Редактирование профиля</h1>
                <form className="edit-profile__form" name="edit-profile" noValidate>
                    <UserName value={userName} onChange={handleNameChange} onError={handleError}/>
                    <Email value={userEmail} onChange={handleEmailChange} onError={handleError}/>
                    <Button className="edit-profile__submit" type="submit" onClick={handleSave} enabled={hasErrors}>Сохранить</Button>
                </form>
            </main>
        </>
    );
}

export default EditProfile;