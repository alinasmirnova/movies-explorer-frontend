import React, { useCallback, useEffect, useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import MoviesList from '../MoviesList';
import Button from '../Button';
import SearchForm from '../SearchForm';
import Preloader from '../Preloader';
import './Movies.css';
import { getMovies } from '../../utils/moviesApi';
import ErrorActionContext from '../../contexts/ErrorActionContext';
import { CARDS_KEY, SEARCH_ERROR_MSG, SEARCH_TEXT_KEY, SHORTS_ONLY_KEY, VISIBLE_CARDS_COUNT_KEY } from '../../utils/consts';
import { getVisibleCards, toVisibleCards } from '../../utils/cardsHelpers';
import { fromLocalStorage, toLocalStorage } from '../../utils/localStorage';
import { deleteMovie, getSavedMovies, saveMovie } from '../../utils/mainApi';
import { filterShortsOnly } from '../../utils/filter';

function Movies({loggedIn}) {
    const [allCards, setAllCards] = useState([]);
    const [cards, setCards] = useState([]);
    const [visibleCards, setVisibleCards] = useState();
    const [savedCards, setSavedCards] = useState([]);
    const [showPreloader, setShowPreloader] = useState(false);
    const [searched, setSearched] = useState(false);
    const onError = React.useContext(ErrorActionContext);

    const updateSavedCards = useCallback(() => {
        return getSavedMovies()
            .then((res) => {
                setSavedCards(res);
                return res;
            })
            .catch((err) => {
                onError(err);
            });
    }, [onError]);

    useEffect(() => {
        const all = fromLocalStorage(CARDS_KEY) ?? []; 
        setAllCards(all);

        const shortsOnly = fromLocalStorage(SHORTS_ONLY_KEY) ?? false;
        const filteredCards = filterShortsOnly(all, shortsOnly);
        setCards(filteredCards);

        updateSavedCards().then(saved => {
            const visibleCount = fromLocalStorage(VISIBLE_CARDS_COUNT_KEY) ?? 0;
            setVisibleCards(toVisibleCards(filteredCards.slice(0, visibleCount), saved));
        
            setSearched(visibleCount > 0);
        });        
    }, [updateSavedCards]);

    const handleCardLike = (card) => {
        if (card.isSaved) {
            deleteMovie(card.id)
                .then((res) => {
                    updateSavedCards();
                    card.isSaved = false;
                    card.id = undefined;
                    updateVisibleCards(visibleCards);
                })
                .catch((err) => {
                    onError(err);
                })
        }
        else {
            saveMovie(card)
                .then((res) => {
                    updateSavedCards();
                    card.isSaved = true;
                    card.id = res._id;
                    updateVisibleCards(visibleCards);
                })
                .catch((err) => {
                    onError(err);
                });
        }
    }

    const getMore = () => {
        updateVisibleCards(getVisibleCards(cards, savedCards, visibleCards));
    }

    const handleSearch = (keyword, shortsOnly) => {
        setSearched(true);
        setShowPreloader(true);
        getMovies(keyword)
        .then((res) => {    
            updateAllCards(res);
            const filtered = filterShortsOnly(res, shortsOnly);
            setCards(filtered);
            updateVisibleCards(getVisibleCards(filtered, savedCards, []))
        })
        .catch((err) => {
            updateAllCards([]);
            updateVisibleCards([]);
            setCards([]);
            onError({ message: SEARCH_ERROR_MSG });
        })
        .finally(() => {
            setShowPreloader(false);            
        });
    }

    const handleShortsOnlyChange = (shortsOnly) => {
        const cards = filterShortsOnly(allCards, shortsOnly);
        setCards(cards);
        updateVisibleCards(getVisibleCards(cards, savedCards, []));
    }

    const updateAllCards = (all) => {
        setAllCards(all);
        toLocalStorage(CARDS_KEY, all);          
    }

    const updateVisibleCards = (visible) => {
        setVisibleCards(visible);
        toLocalStorage(VISIBLE_CARDS_COUNT_KEY, visible.length);
    }

    return (
        <div className="movies">
            <Header activeTab="movies" isLoggedIn={loggedIn}/>
            <main className="movies__container">
                <SearchForm onSubmit={handleSearch} onShortsOnlyChange={handleShortsOnlyChange} storageTextKey={SEARCH_TEXT_KEY} storageShortsOnlyKey={SHORTS_ONLY_KEY} required={true}/>
                { showPreloader && <Preloader /> }
                { !showPreloader && cards.length > 0 && visibleCards?.length > 0 &&
                    <>                
                        <MoviesList cards={visibleCards} onLike={handleCardLike} /> 
                        { cards.length > visibleCards.length && <Button className="movies__more-button" onClick={getMore}>Ещё</Button> }
                    </>
                }
                { searched && !showPreloader && cards.length === 0 &&
                    <p className="movies__nothing-found">Ничего не найдено</p>
                }
            </main>
            <Footer />
        </div>
    );
}

export default Movies;