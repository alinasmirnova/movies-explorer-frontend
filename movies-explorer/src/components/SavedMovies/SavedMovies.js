import React, { useCallback, useContext, useEffect, useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import MoviesList from '../MoviesList';
import SearchForm from '../SearchForm';
import Preloader from '../Preloader';
import './SavedMovies.css';
import { deleteMovie, getSavedMovies } from '../../utils/mainApi';
import ErrorActionContext from '../../contexts/ErrorActionContext';
import { filterSavedCards } from '../../utils/filter';

function SavedMovies({loggedIn}) {
    const [cards, setCards] = useState([]);
    const [visibleCards, setVisibleCards] = useState([]);
    const [showPreloader, setShowPreloader] = useState(false);
    const [currentFilter, setCurrentFilter] = useState({keyword: '', shortsOnly: false});
    const onError = useContext(ErrorActionContext);

    const updateCards = useCallback(() => {
        getSavedMovies()
            .then((res) => {
                setCards(res);
                setVisibleCards(res);
            })
            .catch((err) => {
                onError(err);
            })
            .finally(() => {
                setShowPreloader(false);
            });
    }, [onError]);

    useEffect(() => {
        setShowPreloader(true);
        updateCards();
    }, [updateCards]);

    const handleCardDelete = (card) => {
        deleteMovie(card._id)
            .then(res => {
                updateCards();
                setVisibleCards(filterSavedCards(cards, currentFilter.keyword, currentFilter.shortsOnly));
            })
        .catch((err) => {
            onError(err);
        });
    }

    const handleSearch = (keyword, shortsOnly) => {
        setVisibleCards(filterSavedCards(cards, keyword, shortsOnly));
        setCurrentFilter({keyword, shortsOnly});
    }

    const handleShortsOnlyChange = (shortsOnly) => {
        setCurrentFilter({...currentFilter, shortsOnly: shortsOnly});
        setVisibleCards(filterSavedCards(cards, currentFilter.keyword, shortsOnly));
    }

    return (
        <div className="saved-movies">
            <Header activeTab="saved-movies" isLoggedIn={loggedIn}/>
            <main className='saved-movies__container'>
                <SearchForm onSubmit={ handleSearch } onShortsOnlyChange={handleShortsOnlyChange} required={false}/>
                { showPreloader && <Preloader /> }
                { !showPreloader && 
                    <>                
                        <MoviesList className="saved-movies__list" cards={visibleCards} onDelete={handleCardDelete} /> 
                    </>
                }
            </main>
            <Footer />
        </div>
    );
}

export default SavedMovies;