function filter(movies, keyword, shortsOnly) {
    return movies.filter((movie) => (!shortsOnly || movie.duration <= 40) && movie.nameRU.toLowerCase().includes(keyword.toLowerCase()))
}

export {
    filter,
}