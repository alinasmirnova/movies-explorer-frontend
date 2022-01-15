import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import demoCards from '../../utils/demoCards';
import Footer from '../Footer';
import Header from '../Header';
import MoviesList from '../MoviesList';
import SearchForm from '../SearchForm';
import Preloader from '../Preloader';
import './SavedMovies.css';

function SavedMovies() {
    const [cards, setCards] = useState([]);
    const [showPreloader, setShowPreloader] = useState(false);

    useEffect(() => {
        setCards(demoCards);
    }, []);

    const handleCardDelete = () => {

    }

    return (
        <>
            <Header activeTab="saved-movies"/>
            <main className='saved-movies'>
                <SearchForm />
                { showPreloader && <Preloader /> }
                { !showPreloader && 
                    <>                
                        <MoviesList className="saved-movies__list" cards={cards} onDelete={handleCardDelete} /> 
                    </>
                }
            </main>
            <Footer />
        </>
    );
}

export default SavedMovies;