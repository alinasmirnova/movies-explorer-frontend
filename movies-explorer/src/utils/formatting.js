function formatDuration(duration) {
    if (duration < 60)
        return `${duration}м`;
    return `${Math.floor(duration / 60)}ч ${duration % 60}м`;
}

export { formatDuration };