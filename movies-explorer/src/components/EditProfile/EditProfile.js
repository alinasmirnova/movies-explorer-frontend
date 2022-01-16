import { useEffect, useState } from 'react';
import Button from '../Button';
import EditableField from '../EditableField/EditableField';
import Header from '../Header';
import { validateName, validateEmail } from '../../utils/validations';
import './EditProfile.css';

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
                    <EditableField
                        name="name"
                        title="Имя"
                        placeholder="Имя"
                        type="text"
                        value={userName}
                        minLenght="2"
                        maxLenght="30"
                        onError={handleError}
                        onValueChange={handleNameChange}
                        validate={validateName}
                        required />

                    <EditableField
                        name="email"
                        title="E-mail"
                        placeholder="E-mail"
                        type="email"
                        value={userEmail}
                        onError={handleError}
                        onValueChange={handleEmailChange}
                        validate={validateEmail}
                        required />

                    <Button className="edit-profile__submit" type="submit" onClick={handleSave} enabled={hasErrors}>Сохранить</Button>
                </form>
            </main>
        </>
    );
}

export default EditProfile;