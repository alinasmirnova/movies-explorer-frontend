import { Link } from 'react-router-dom';
import './InternalLink.css';

function InternalLink({ children, className, to }) {
    return (
        <Link to={to} className={`internal-link ${className}`}>{children}</Link>
    );
}

export default InternalLink;