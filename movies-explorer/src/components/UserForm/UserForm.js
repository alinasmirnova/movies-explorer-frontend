import Button from '../Button';
import './UserForm.css'

function UserForm({name, title, children, submitText, onSubmit, hasErrors}) {
    return (
        <form className="user-form" name={name} noValidate>
            <h1 className="user-form__title">{title}</h1>
            <div className="user-form__fields">
                {children}
            </div>
            <Button className="user-form__submit" type="submit" onClick={onSubmit} enabled={hasErrors}>{submitText}</Button>
        </form>
    );
}

export default UserForm;