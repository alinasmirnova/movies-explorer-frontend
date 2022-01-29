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
import { cardsKey, searchErrorMsg, visibleCardsKey } from '../../utils/consts';
import { getVisibleCards } from '../../utils/cardsHelpers';
import { fromLocalStorage, toLocalStorage } from '../../utils/localStorage';

function Movies() {
    const [cards, setCards] = useState([]);
    const [visibleCards, setVisibleCards] = useState([]);
    const [showPreloader, setShowPreloader] = useState(false);
    const onError = React.useContext(ErrorActionContext);

    useEffect(() => {
        setCards(fromLocalStorage(cardsKey) ?? []);
        setVisibleCards(fromLocalStorage(visibleCardsKey) ?? []);
    }, []);

    const handleCardLike = () => {

    }

    const getMore = () => {
        updateVisibleCards(getVisibleCards(cards, visibleCards));
    }

    const handleSearch = (keyword, shortsOnly) => {
        setShowPreloader(true);
        getMovies()
        .then((res) => {    
            updateCards(res);
            updateVisibleCards(getVisibleCards(res, []))
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
        toLocalStorage(visibleCardsKey, visible);
    }

    return (
        <div className="movies">
            <Header activeTab="movies"/>
            <main className="movies__container">
                <SearchForm onSubmit={handleSearch}/>
                { showPreloader && <Preloader /> }
                { !showPreloader && cards.length > 0 &&
                    <>                
                        <MoviesList cards={visibleCards} onLike={handleCardLike} /> 
                        { cards.length > visibleCards.length && <Button className="movies__more-button" onClick={getMore}>Ещё</Button> }
                    </>
                }
                { !showPreloader && cards.length === 0 &&
                    <p className="movies__nothing-found">Ничего не найдено</p>
                }
            </main>
            <Footer />
        </div>
    );
}

export default Movies;