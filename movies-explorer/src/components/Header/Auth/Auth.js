import InternalLink from '../../InternalLink';
import Button from '../../Button';
import List from '../../List';
import Account from '../Account';
import './Auth.css';

function Auth({ className }) {
    return (
        <List className={`auth ${className}`}>
            <InternalLink className='auth__registration' to="/signup">Регистрация</InternalLink>
            <Button className="auth__enter">Войти</Button>
            <Account />
        </List>
    );
}

export default Auth;