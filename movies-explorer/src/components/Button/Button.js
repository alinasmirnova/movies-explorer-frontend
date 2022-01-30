import './Button.css';

function Button({children, className, onClick, type, disabled = false}) {
    return (
        <>
            <button 
                className={`button ${className}`}
                onClick={onClick}
                type={type}
                disabled={disabled}>
                    {children}
            </button>
        </>
    );
}

export default Button;