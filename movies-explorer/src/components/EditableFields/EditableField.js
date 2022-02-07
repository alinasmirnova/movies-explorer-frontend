import { useEffect, useRef, useState } from 'react';
import './EditableField.css'

function EditableField({name, title, type, value, placeholder, onValueChange, validate, required = false, minLength, maxLength, pattern }) {
    const [isValid, setIsValid] = useState(true);
    const [errorText, setErrorText] = useState('');
    const inputRef = useRef();

    useEffect(() => {
        const cur = inputRef.current;
        const isValid = validate(cur.value, cur.validity).isNewValueValid;
        onValueChange(cur.name, cur.value, isValid);
    });

    const handleValueChange = (e) => {
        const newValue = e.target.value;
        const { isNewValueValid, error } = validate(newValue, e.target.validity);
        setIsValid(isNewValueValid);
        setErrorText(error)

        onValueChange(name, newValue, isNewValueValid);        
    }

    return (
        <div className="editable-field">
            <h2 className="editable-field__title">{title}</h2>
            <input 
                ref={inputRef}
                name={name}
                className={`editable-field__input ${!isValid ? 'editable-field__input_invalid' : ''}`}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={handleValueChange}
                required={required}
                minLength={minLength}
                maxLength={maxLength}
                pattern={pattern}/>
            { !isValid && <span className="editable-field__error">{errorText}</span> }
        </div>
    );
}

export default EditableField;