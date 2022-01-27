import React, { useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import MoviesList from '../MoviesList';
import Button from '../Button';
import SearchForm from '../SearchForm';
import Preloader from '../Preloader';
import './Movies.css';
import { getMovies } from '../../utils/moviesApi';

function Movies() {
    const [cards, setCards] = useState([]);
    const [showPreloader, setShowPreloader] = useState(false);

    const handleCardLike = () => {

    }

    const getMore = () => {

    }

    const handleSearch = (keyword, shortsOnly) => {
        setShowPreloader(true);
        getMovies()
        .then((res) => {
            setCards(res);
        })
        .catch((err) => {
            setCards([]);
            console.log(err);
        })
        .finally(() => {
            setShowPreloader(false);
        });
    }

    return (
        <div className="movies">
            <Header activeTab="movies"/>
            <main className="movies__container">
                <SearchForm onSubmit={handleSearch}/>
                { showPreloader && <Preloader /> }
                { !showPreloader && cards.length > 0 &&
                    <>                
                        <MoviesList cards={cards} onLike={handleCardLike} /> 
                        <Button className="movies__more-button" onClick={getMore}>Ещё</Button>
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