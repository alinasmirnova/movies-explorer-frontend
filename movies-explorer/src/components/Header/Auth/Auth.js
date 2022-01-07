import InternalLink from '../../InternalLink';
import Button from '../../Button';
import List from '../../List';
import './Auth.css';

function Auth({ className }) {
    return (
        <List className={`auth ${className}`}>
            <InternalLink className='auth__registration' to="/signup">Регистрация</InternalLink>
            <Button className="auth__enter">Войти</Button>
            <InternalLink to="/profile" className="auth__account">
                <span>Аккаунт</span>
                <div className="auth__account-icon"/>
            </InternalLink>
        </List>
    );
}

export default Auth;