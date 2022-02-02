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
import { getVisibleCards } from '../../utils/cardsHelpers';
import { fromLocalStorage, toLocalStorage } from '../../utils/localStorage';
import { deleteMovie, getSavedMovies, saveMovie } from '../../utils/mainApi';

function Movies({loggedIn}) {
    const [cards, setCards] = useState([]);
    const [visibleCards, setVisibleCards] = useState();
    const [savedCards, setSavedCards] = useState([]);
    const [showPreloader, setShowPreloader] = useState(false);
    const [searched, setSearched] = useState(false);
    const onError = React.useContext(ErrorActionContext);

    const updateSavedCards = useCallback(() => {
        getSavedMovies()
            .then((res) => {
                setSavedCards(res);
            })
            .catch((err) => {
                onError(err);
            });
    }, [onError]);

    useEffect(() => {
        const all = fromLocalStorage(CARDS_KEY) ?? []; 
        setCards(all);
        const visibleCount = fromLocalStorage(VISIBLE_CARDS_COUNT_KEY) ?? 0;
        setVisibleCards(all.slice(0, visibleCount));
        updateSavedCards();
        setSearched(visibleCount > 0);
    }, [updateSavedCards]);

    const handleCardLike = (card) => {
        if (card.isSaved) {
            deleteMovie(card.id)
                .then((res) => {
                    updateSavedCards();
                    card.isSaved = false;
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
                    card.id = res.id;
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
        getMovies(keyword, shortsOnly)
        .then((res) => {    
            updateCards(res);
            updateVisibleCards(getVisibleCards(res, savedCards, []))
        })
        .catch((err) => {
            updateCards([]);
            updateVisibleCards([])
            onError({ message: SEARCH_ERROR_MSG });
        })
        .finally(() => {
            setShowPreloader(false);            
        });
    }

    const updateCards = (all) => {
        setCards(all);
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
                <SearchForm onSubmit={handleSearch} storageTextKey={SEARCH_TEXT_KEY} storageSHORTS_ONLY_KEY={SHORTS_ONLY_KEY} required={true}/>
                { showPreloader && <Preloader /> }
                { !showPreloader && cards.length > 0 &&
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