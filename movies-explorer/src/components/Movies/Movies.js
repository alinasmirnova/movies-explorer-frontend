import React, { useEffect, useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import MoviesList from '../MoviesList';
import Button from '../Button';
import SearchForm from '../SearchForm';
import Preloader from '../Preloader';
import './Movies.css';
import { getMovies } from '../../utils/moviesApi';
import ErrorActionContext from '../../contexts/ErrorActionContext';
import { cardsKey, searchErrorMsg, searchTextKey, shortsOnlyKey, visibleCardsCountKey } from '../../utils/consts';
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

    useEffect(() => {
        const all = fromLocalStorage(cardsKey) ?? []; 
        setCards(all);
        const visibleCount = fromLocalStorage(visibleCardsCountKey) ?? 0;
        setVisibleCards(all.slice(0, visibleCount));
        updateSavedCards();
        setSearched(visibleCount > 0);
    }, []);

    const updateSavedCards = () => {
        getSavedMovies()
            .then((res) => {
                setSavedCards(res);
            })
            .catch((err) => {
                onError(err);
            });
    }

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
            onError({ message: searchErrorMsg });
        })
        .finally(() => {
            setShowPreloader(false);            
        });
    }

    const updateCards = (all) => {
        setCards(all);
        toLocalStorage(cardsKey, all);     
    }

    const updateVisibleCards = (visible) => {
        setVisibleCards(visible);
        toLocalStorage(visibleCardsCountKey, visible.length);
    }

    return (
        <div className="movies">
            <Header activeTab="movies" isLoggedIn={loggedIn}/>
            <main className="movies__container">
                <SearchForm onSubmit={handleSearch} storageTextKey={searchTextKey} storageShortsOnlyKey={shortsOnlyKey} required={true}/>
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