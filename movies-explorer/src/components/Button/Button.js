import './Button.css';

function Button({children, className, onClick, type}) {
    return (
        <>
            <button className={`button ${className}`} onClick={onClick} type={type}>{children}</button>
        </>
    );
}

export default Button;