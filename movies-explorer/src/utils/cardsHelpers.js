function getVisibleCards(cards, current) {
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