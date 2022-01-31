const notFound = {
    code: 404,
    message: 'Страница не найдена'
}

const keywordMissingMsg = 'Нужно ввести ключевое слово';
const searchErrorMsg = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';

const cardsKey = 'cards';
const visibleCardsCountKey = 'visibleCardsCount';
const searchTextKey = 'searchText';
const shortsOnlyKey = 'shortsOnly';
export {
    notFound,

    keywordMissingMsg,
    searchErrorMsg,

    cardsKey,
    visibleCardsCountKey,
    searchTextKey,
    shortsOnlyKey,
};