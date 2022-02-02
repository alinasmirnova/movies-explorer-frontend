const NOT_FOUND = {
    code: 404,
    message: 'Страница не найдена'
}

const KEYWORD_MISSING_MSG = 'Нужно ввести ключевое слово';
const SEARCH_ERROR_MSG = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';

const CARDS_KEY = 'cards';
const VISIBLE_CARDS_COUNT_KEY = 'visibleCardsCount';
const SEARCH_TEXT_KEY = 'searchText';
const SHORTS_ONLY_KEY = 'shortsOnly';
export {
    NOT_FOUND,

    KEYWORD_MISSING_MSG,
    SEARCH_ERROR_MSG,

    CARDS_KEY,
    VISIBLE_CARDS_COUNT_KEY,
    SEARCH_TEXT_KEY,
    SHORTS_ONLY_KEY,
};