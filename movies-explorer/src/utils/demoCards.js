const demoCards = [
    {
        _id: 1,
        nameRU: '33 слова о дизайне',
        thumbnail: 'https://images.unsplash.com/photo-1641645100200-cf21bc5fb2a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1782&q=80',
        duration: 102,
    },
    {
        _id: 2,
        nameRU: 'Киноальманах «100 лет дизайна»',
        thumbnail: 'https://images.unsplash.com/photo-1621935617738-9c3b0229b5ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
        duration: 50,
    },
    {
        _id: 3,
        nameRU: 'В погоне за Бенкси',
        thumbnail: 'https://images.unsplash.com/photo-1507754804582-aeacf12f3dea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        duration: 102,
    },
    {
        _id: 4,
        nameRU: 'Баския: Взрыв реальности',
        thumbnail: 'https://images.unsplash.com/photo-1554279892-684f2da5fbe2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
        duration: 102,
    },
    {
        _id: 5,
        nameRU: 'Бег это свобода',
        thumbnail: 'https://images.unsplash.com/photo-1638704957265-0817f29d9b6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        duration: 102,
    },
    {
        _id: 6,
        nameRU: 'Книготорговцы',
        thumbnail: 'https://images.unsplash.com/photo-1635886629876-0742356e20f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80',
        duration: 102,
    },
    {
        _id: 7,
        nameRU: 'Когда я думаю о Германии ночью',
        thumbnail: 'https://images.unsplash.com/photo-1507754681446-38446450bef5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        duration: 102,
    },
    {
        _id: 8,
        nameRU: 'Gimme Danger: История Игги и The Stooges',
        thumbnail: 'https://images.unsplash.com/photo-1559061156-4a46ec29107d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        duration: 102,
    },
    {
        _id: 9,
        nameRU: 'Дженис: Маленькая девочка грустит',
        thumbnail: 'https://images.unsplash.com/photo-1577096393888-151c1fcdcd38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1286&q=80',
        duration: 102,
    },
    {
        _id: 10,
        nameRU: 'Соберись перед прыжком',
        thumbnail: 'https://images.unsplash.com/photo-1595792342334-c6158f7096a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        duration: 102,
    },
    {
        _id: 11,
        nameRU: 'Пи Джей Харви: A dog called money',
        thumbnail: 'https://images.unsplash.com/photo-1554279892-3b831e502773?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        duration: 102,
    },
    {
        _id: 12,
        nameRU: 'По волнам: Искусство звука в кино',
        thumbnail: 'https://images.unsplash.com/photo-1595277265574-8e954b2b8947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1286&q=80',
        duration: 102,
    },
    {
        _id: 13,
        nameRU: 'Рудбой',
        thumbnail: 'https://images.unsplash.com/photo-1596544701302-2a61b8bbca35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80',
        duration: 102,
    },
    {
        _id: 14,
        nameRU: 'Скейт — кухня',
        thumbnail: 'https://images.unsplash.com/photo-1595792559652-dabdbffd5bda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        duration: 102,
    },
    {
        _id: 15,
        nameRU: 'Война искусств',
        thumbnail: 'https://images.unsplash.com/photo-1580780965002-6ca357516eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80',
        duration: 102,
    },
    {
        _id: 16,
        nameRU: 'Зона',
        thumbnail: 'https://images.unsplash.com/photo-1580780965002-6ca357516eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80',
        duration: 102,
    },
];


export default demoCards;