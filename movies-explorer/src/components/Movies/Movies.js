import React, { useEffect, useState } from 'react';
import demoCards from '../../utils/demoCards';
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
                { !showPreloader && 
                    <>                
                        <MoviesList cards={cards} onLike={handleCardLike} /> 
                        <Button className="movies__more-button" onClick={getMore}>Ещё</Button>
                    </>
                }
            </main>
            <Footer />
        </div>
    );
}

export default Movies;