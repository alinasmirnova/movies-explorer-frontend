import { useEffect, useState } from 'react';
import Button from '../Button';
import Header from '../Header';
import './EditProfile.css';
import { UserName, Email } from '../EditableFields';
import UserForm from '../UserForm';

function EditProfile() {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [hasErrors, setHasErrors] = useState(false);

    useEffect(() => {
        setUserName('Виталий');
        setUserEmail('pochta@yandex.ru');
    }, []);

    const handleSubmit = (e) => {
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
                <UserForm name="edit-profile" title="Редактирование профиля" submitText="Сохранить" onSubmit={handleSubmit} hasErrors={hasErrors}>
                    <UserName value={userName} onChange={handleNameChange} onError={handleError}/>
                    <Email value={userEmail} onChange={handleEmailChange} onError={handleError}/>
                </UserForm>
            </main>
        </>
    );
}

export default EditProfile;