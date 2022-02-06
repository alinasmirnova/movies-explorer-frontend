import { useContext, useState } from 'react';
import Header from '../Header';
import './EditProfile.css';
import { UserName, Email } from '../EditableFields';
import UserForm from '../UserForm';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useNavigate } from 'react-router-dom';
import SuccessPopup from './SuccessPopup/SuccessPopup';

function EditProfile({loggedIn, onSubmit}) {
    const currentUser = useContext(CurrentUserContext);
    const [userName, setUserName] = useState(currentUser.name);
    const [userEmail, setUserEmail] = useState(currentUser.email);
    const [submitErrorText, setSubmitErrorText] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);
    const navigate = useNavigate();
        
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name: userName, email: userEmail })
        .then(() => {
            setShowSuccess(true);
        })
        .catch((err) => {
            setSubmitErrorText(err.message);
        });        
    };

    const onSuccessClose = () => {
        setShowSuccess(false);
        navigate(-1);
    }

    const handleNameChange = (name) => {
        setUserName(name);
    }

    const handleEmailChange = (email) => {
        setUserEmail(email);
    }

    const userInfoChanged = () => {
        return currentUser.name !== userName || currentUser.email !== userEmail;
    }

    return (
        <div className="edit-profile">
            <Header isLoggedIn={loggedIn} />
            <main className="edit-profile__container">
                <UserForm name="edit-profile" title="Редактирование профиля" submitText="Сохранить" canSubmit={userInfoChanged()} onSubmit={handleSubmit} submitErrorText={submitErrorText}>
                    <UserName value={userName} onChange={handleNameChange}/>
                    <Email value={userEmail} onChange={handleEmailChange}/>
                </UserForm>
            </main>
            { showSuccess && <SuccessPopup onClose={onSuccessClose}></SuccessPopup> }
        </div>
    );
}

export default EditProfile;