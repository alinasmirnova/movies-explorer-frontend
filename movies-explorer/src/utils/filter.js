function filter(movies, keyword) {
    return movies.filter((movie) => movie.nameRU.toLowerCase().includes(keyword.toLowerCase()));
}

function filterSavedCards(movies, keyword, shortsOnly) {
    return filter(filterShortsOnly(movies, shortsOnly), keyword);
}

function filterShortsOnly(movies, shortsOnly) {
    if (!shortsOnly){
        return movies;
    }
        
    return movies.filter((movie) => movie.duration <= 40);
}

export {
    filter,
    filterShortsOnly,
    filterSavedCards,
}