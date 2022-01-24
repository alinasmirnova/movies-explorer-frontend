import EditableField from "../EditableField";

function Password({value, onChange, onError}) {
    const validate = (value, validity) => {
        return { isNewValueValid: true, error: '' };
    }

    return (
        <EditableField name="password"
                        title="Пароль"
                        type="password"
                        value={value}
                        minLenght="8"
                        onError={onError}
                        onValueChange={onChange}
                        validate={validate}
                        required />
    );
}

export default Password;