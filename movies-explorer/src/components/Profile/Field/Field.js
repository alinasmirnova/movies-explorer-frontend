import './Field.css';

function Field({ title, children, underlined = true}) {
    return (
        <div className={`field ${ underlined ? 'field__underlined' : '' }`}>
            <h2 className="field__title">{title}</h2>
            <p className="field__value">{children}</p>            
        </div>
    );    
}

export default Field;