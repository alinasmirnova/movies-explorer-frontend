import EditableField from "../EditableField";

function Password({value, onChange}) {
    const validate = (value, validity) => {
        if (validity.valid){
            return { isNewValueValid: true, error: '' };
        }

        if (validity.valueMissing) {
            return { isNewValueValid: false, error: 'Введите пароль'}
        }

        if (validity.tooShort) {
            return { isNewValueValid: false, error: 'Пароль должен быть не короче 8 символов длиной' }
        }

        return { isNewValueValid: false, error: 'Некорректное значение' }; 
    }

    return (
        <EditableField name="password"
                        title="Пароль"
                        type="password"
                        value={value}
                        minLength="8"
                        onValueChange={onChange}
                        validate={validate}
                        required />
    );
}

export default Password;