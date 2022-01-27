function getJson(promise) {
    return promise.then(res => {
        if (res.ok) {
            return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
    });
}

export {
    getJson,
}