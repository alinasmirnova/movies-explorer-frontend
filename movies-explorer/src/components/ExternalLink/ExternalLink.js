import './ExternalLink.css';

function ExternalLink({ children, className, to }) {
    return (
        <a href={to} className={`external-link ${className}`} target="_blank" rel="noreferrer">{children}</a>
    );
}

export default ExternalLink;