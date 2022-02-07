import InternalLink from '../../InternalLink';
import Button from '../../Button';
import List from '../../List';
import './Auth.css';
import { useNavigate } from 'react-router-dom';

function Auth({ className }) {
    const navigate = useNavigate();
    const enter = () => {
        navigate('/signin');
    };

    return (
        <List className={`auth ${className}`}>
            <InternalLink className='auth__registration' to="/signup">Регистрация</InternalLink>
            <Button className="auth__enter" onClick={enter}>Войти</Button>        
        </List>
    );
}

export default Auth;