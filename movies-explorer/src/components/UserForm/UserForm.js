import React, { useEffect, useRef, useState } from 'react';
import Button from '../Button';
import './UserForm.css'

function UserForm({ name, title, children, submitText, onSubmit }) {
    const [hasErrors, setHasErrors] = useState(true);
    const [loaded, setLoaded] = useState(false);
    const fieldsValid = useRef();

    useEffect(() => {
        setLoaded(true);
        fieldsValid.current = {};
    }, []);

    const onFieldChange = (name, isValid) => {
        fieldsValid.current = {
            ...fieldsValid.current,
            [name]: isValid,
        }
        setHasErrors(Object.keys(fieldsValid.current).some(key => !fieldsValid.current[key]));
    }

    return (
        <form className="user-form" name={name} noValidate>
            <h1 className="user-form__title">{title}</h1>
            <div className="user-form__fields">
                {loaded && children.map((child, i) => {
                    return React.cloneElement(child, {
                        key: i,
                        onChange: (name, value, isValid) => {
                            child.props.onChange(value);
                            onFieldChange(name, isValid);
                        }
                    })
                })}
            </div>
            <Button className="user-form__submit" type="submit" onClick={onSubmit} disabled={hasErrors}>{submitText}</Button>
        </form>
    );
}

export default UserForm;