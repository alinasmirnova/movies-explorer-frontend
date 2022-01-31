import { getJson } from "./apiHelpers";

let baseUri = 'http://localhost:3001';
// let baseUri;
// if (document.documentURI.startsWith('https')) {
//     baseUri = 'https://api.asmirnova.movies.nomoredomains.rocks';  
// }
// else {
//     baseUri = 'http://api.asmirnova.movies.nomoredomains.rocks';  
// }

function signUp({ name, email, password }) {
    return post('signup', {
        name: name,
        email: email,
        password: password,
    })
}

function signIn({email, password}) {
    return postFetch('signin', {
        email: email,
        password: password,
    });
}

function signOut() {
    return postFetch('signout');
}

function getCurrentUser() {
    return get('users/me');
}

function getSavedMovies() {
    return get('movies');
}

function saveMovie({ country, director, duration, year, description, image, trailer, nameRU, nameEN, thumbnail, movieId }) {
    return post('movies', {
        country, director, duration, year, description, image, trailer, nameRU, nameEN, thumbnail, movieId
    });
}

function deleteMovie(id) {
    return deleteMethod(`movies/${id}`);
}

function get(subPath) {
    return getJson(fetch(buildUri(subPath), {
        credentials: 'include',
    }));   
}

function patch(subPath, body) {
    return getJson(fetch(buildUri(subPath), {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
        credentials: 'include',
    }));
}

function put(subPath) {
    return getJson(fetch(buildUri(subPath), {
        method: 'PUT',
        credentials: 'include',
    }));
}

function post(subPath, body) {
    return getJson(postFetch(subPath, body));
}

function postFetch(subPath, body) {
    return fetch(buildUri(subPath), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
        credentials: 'include',
    })
}

function deleteMethod(subPath) {
    return getJson(fetch(buildUri(subPath), {
        method: 'DELETE',
        credentials: 'include',
    }));
}

function buildUri(subPath) {
    return `${baseUri}/${subPath}`;
}

export {
    signUp,
    signIn,
    signOut,
    getCurrentUser,

    getSavedMovies,
    saveMovie,
    deleteMovie,
}