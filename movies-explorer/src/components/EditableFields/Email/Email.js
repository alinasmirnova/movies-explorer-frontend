import EditableField from "../EditableField";

function Email({value, onChange, onError}) {
    const validate = (value, validity) => {
        return { isNewValueValid: true, error: '' };
    }

    return (
        <EditableField name="email"
                        title="E-mail"
                        placeholder="E-mail"
                        type="email"
                        value={value}
                        onError={onError}
                        onValueChange={onChange}
                        validate={validate}
                        required />
    );
}

export default Email;