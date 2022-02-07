import EditableField from "../EditableField";

function UserName({value, onChange}) {
    const validate = (value, validity) => {
        if (validity.valid){
            return { isNewValueValid: true, error: '' };
        }

        if (validity.valueMissing) {
            return { isNewValueValid: false, error: 'Введите имя'}
        }

        if (validity.tooLong || validity.tooShort) {
            return { isNewValueValid: false, error: 'Имя должно быть от 2 до 30 символов длиной' }
        }

        if (validity.patternMismatch) {
            return { isNewValueValid: false, error: 'Имя может содержать только латиницу, кириллицу, дефис и пробел'}
        }

        return { isNewValueValid: false, error: 'Некорректное значение' };            
    }

    return (
        <EditableField name="name"
                        title="Имя"
                        placeholder="Имя"
                        type="text"
                        value={value}
                        minLength="2"
                        maxLength="30"
                        onValueChange={onChange}
                        validate={validate}
                        pattern="[A-Za-zА-Яа-яёЁ -]*"
                        required />
    );
}

export default UserName;