import React, { useEffect, useState } from 'react';
import demoCards from '../../utils/demoCards';
import Footer from '../Footer';
import Header from '../Header';
import MoviesList from '../MoviesList';
import Button from '../Button';
import SearchForm from '../SearchForm';
import Preloader from '../Preloader';
import './Movies.css';

function Movies() {
    const [cards, setCards] = useState([]);
    const [showPreloader, setShowPreloader] = useState(false);

    useEffect(() => {
        setCards(demoCards);
    }, []);

    const handleCardLike = () => {

    }

    const getMore = () => {

    }

    return (
        <div className="movies">
            <Header activeTab="movies"/>
            <main className="movies__container">
                <SearchForm />
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