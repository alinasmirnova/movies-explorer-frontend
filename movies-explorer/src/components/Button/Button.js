import './Button.css';

function Button({children, className, onClick, type, enabled = true}) {
    return (
        <>
            <button 
                className={`button ${className}`}
                onClick={onClick}
                type={type}
                enabled={enabled.toString()}>
                    {children}
            </button>
        </>
    );
}

export default Button;