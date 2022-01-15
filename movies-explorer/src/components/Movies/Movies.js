import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import demoCards from '../../utils/demoCards';
import Footer from '../Footer';
import Header from '../Header';
import MoviesList from '../MoviesList';
import Button from '../Button';
import './Movies.css';
import SearchForm from './SearchForm';
import Preloader from '../Preloader';

function Movies() {
    const [cards, setCards] = useState([]);
    const [showPreloader, setShowPreloader] = useState(true);

    useEffect(() => {
        setCards(demoCards);
    }, []);

    const handleCardLike = () => {

    }

    const getMore = () => {

    }

    return (
        <>
            <Header activeTab="movies"/>
            <main className='movies'>
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
        </>
    );
}

export default Movies;