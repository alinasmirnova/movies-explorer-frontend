function getVisibleCards(cards, savedCards, current) {
    return getPage(cards, current)
        .map(card => {
            const saved = savedCards.find(s => card.movieId === s.movieId)
            return {
                ...card,
                isSaved: saved !== undefined,
                id: saved ? saved._id : undefined
            }
        })
}

function getPage(cards, current) {
    var row = getCardsCountInRow();
    var first = getFirstCardsCount();
    var cur = current.length;

    if (cur < first)
        return cards.slice(0, first);
    
    if (cur % row > 0)
        return cards.slice(0, cur + (row - cur % row) + row);
    
    return cards.slice(0, cur + row);
}

function getCardsCountInRow() {
    const width = window.screen.width;
    if (width < 650) {
        return 1;
    }
    if (width <= 1136) {
        return 2;
    }
    if (width < 1280) {
        return 3;
    }

    return 4;
}

function getFirstCardsCount() {
    const width = window.screen.width;
    if (width < 650) {
        return 5;
    }
    if (width <= 1136) {
        return 8;
    }
    if (width < 1280) {
        return 12;
    }

    return 16;
}

export {
    getVisibleCards,
}