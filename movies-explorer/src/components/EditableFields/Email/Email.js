import validator from 'validator';
import EditableField from "../EditableField";

function Email({value, onChange}) {
    const validate = (value, validity) => {
        if (validity.valid){
            return { isNewValueValid: true, error: '' };
        }

        if (validity.valueMissing) {
            return { isNewValueValid: false, error: 'Введите email'}
        }

        if (validity.typeMismatch || !validator.isEmail(value)) {
            return { isNewValueValid: false, error: 'Неправильный формат email' }
        }

        return { isNewValueValid: false, error: 'Некорректное значение' }; 
    }

    return (
        <EditableField name="email"
                        title="E-mail"
                        placeholder="E-mail"
                        type="email"
                        value={value}
                        onValueChange={onChange}
                        validate={validate}
                        required />
    );
}

export default Email;