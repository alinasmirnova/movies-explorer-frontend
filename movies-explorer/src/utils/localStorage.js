function toLocalStorage(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
}

function fromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

export {
    toLocalStorage,
    fromLocalStorage,
}