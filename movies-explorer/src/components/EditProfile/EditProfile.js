import { useContext, useEffect, useState } from 'react';
import Header from '../Header';
import './EditProfile.css';
import { UserName, Email } from '../EditableFields';
import UserForm from '../UserForm';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useNavigate } from 'react-router-dom';

function EditProfile({loggedIn, onSubmit}) {
    const currentUser = useContext(CurrentUserContext);
    const [userName, setUserName] = useState(currentUser.name);
    const [userEmail, setUserEmail] = useState(currentUser.email);
    const [submitErrorText, setSubmitErrorText] = useState('');
    const navigate = useNavigate();
        
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name: userName, email: userEmail })
        .then(() => {
            navigate(-1);
        })
        .catch((err) => {
            setSubmitErrorText(err.message);
        });
        
    };

    const handleNameChange = (name) => {
        setUserName(name);
    }

    const handleEmailChange = (email) => {
        setUserEmail(email);
    }

    return (
        <div className="edit-profile">
            <Header isLoggedIn={loggedIn} />
            <main className="edit-profile__container">
                <UserForm name="edit-profile" title="Редактирование профиля" submitText="Сохранить" onSubmit={handleSubmit} submitErrorText={submitErrorText}>
                    <UserName value={userName} onChange={handleNameChange}/>
                    <Email value={userEmail} onChange={handleEmailChange}/>
                </UserForm>
            </main>
        </div>
    );
}

export default EditProfile;