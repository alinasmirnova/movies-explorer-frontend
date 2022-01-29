import EditableField from "../EditableField";

function UserName({value, onChange, onError}) {
    const validate = (value, validity) => {
        return { isNewValueValid: true, error: '' };
    }

    return (
        <EditableField name="name"
                        title="Имя"
                        placeholder="Имя"
                        type="text"
                        value={value}
                        minLength="2"
                        maxLength="30"
                        onError={onError}
                        onValueChange={onChange}
                        validate={validate}
                        required />
    );
}

export default UserName;