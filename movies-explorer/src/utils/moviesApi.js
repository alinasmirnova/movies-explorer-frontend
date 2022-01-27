import { getJson } from "./apiHelpers";

const moviesUri = 'https://api.nomoreparties.co/beatfilm-movies';
const imageBaseUri = 'https://api.nomoreparties.co/';

function getMovies() {
   return getJson(fetch(moviesUri)).then(res => res.map((movie) => {
       return {
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: imageBaseUri + movie.image.url,
        trailer: movie.trailerLink,
        thumbnail: imageBaseUri + movie.image.formats.thumbnail.url,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
       }
   })); 
}

export {
    getMovies,
};
