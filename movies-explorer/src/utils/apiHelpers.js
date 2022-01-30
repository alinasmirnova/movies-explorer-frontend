function getJson(promise) {
    return promise.then(response => {
        return response.json().then(json => {
            return response.ok ? json : Promise.reject(json);
          });
    });
}

export {
    getJson,
}