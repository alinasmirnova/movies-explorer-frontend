function validateName(value, validity) {
    return { isNewValueValid: true, error: '' };
}

function validateEmail(value, validity) {
    return { isNewValueValid:true, error: '' };
}

export {
    validateName,
    validateEmail,
}