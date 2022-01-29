import { useState } from 'react';
import './EditableField.css'

function EditableField({name, title, type, value, placeholder, onValueChange, onError, validate, required = false, minLength, maxLength }) {
    const [isValid, setIsValid] = useState(true);
    const [errorText, setErrorText] = useState('');

    const handleValueChange = (e) => {
        const newValue = e.target.value; 
        const { isNewValueValid, error } = validate(newValue, e.target.validity);
        setIsValid(isNewValueValid);
        setErrorText(error)

        if (isNewValueValid) {
            onValueChange(newValue);
        }
        else {
            onError(e.target);
        }
    }

    return (
        <div className="editable-field">
            <h2 className="editable-field__title">{title}</h2>
            <input 
                name={name}
                className={`editable-field__input ${!isValid ? 'editable-field__input_invalid' : ''}`}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={handleValueChange}
                required={required}
                minLength={minLength}
                maxLength={maxLength}/>
            { !isValid && <span className="editable-field__error">{errorText}</span> }
        </div>
    );
}

export default EditableField;