import InternalLink from '../../InternalLink';
import './Account.css';

function Account() {
    return (
        <InternalLink to="/profile" className="account">
            <span>Аккаунт</span>
            <div className="account__icon"/>
        </InternalLink>
    );
}

export default Account;