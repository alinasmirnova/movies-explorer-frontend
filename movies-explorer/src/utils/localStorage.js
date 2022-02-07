function toLocalStorage(key, obj) {
    if (key)
        localStorage.setItem(key, JSON.stringify(obj));
}

function fromLocalStorage(key) {
    if (key)
        return JSON.parse(localStorage.getItem(key));
    return undefined;
}

export {
    toLocalStorage,
    fromLocalStorage,
}