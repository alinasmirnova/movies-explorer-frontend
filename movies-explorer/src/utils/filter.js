function filter(movies, keyword) {
    return movies.filter((movie) => movie.nameRU.toLowerCase().includes(keyword.toLowerCase()))
}

export {
    filter,
}