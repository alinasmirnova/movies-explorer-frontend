import { Link } from 'react-router-dom';
import Button from '../../Button';
import RowList from '../../HorizontalList';
import './Auth.css';

function Auth({ className }) {
    return (
        <RowList className={`auth ${className}`}>
            <Link className='auth__registration' to="#">Регистрация</Link>
            <Button className="auth__enter">Войти</Button>
            <Link to="#" className="auth__account">
                <span>Аккаунт</span>
                <div className="auth__account-icon"/>
            </Link>
        </RowList>
    );
}

export default Auth;