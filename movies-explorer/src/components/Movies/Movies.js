import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import demoCards from '../../utils/demoCards';
import Footer from '../Footer';
import Header from '../Header';
import MoviesList from '../MoviesList';
import Button from '../Button';
import './Movies.css';
import SearchForm from './SearchForm';

function Movies() {
    const [cards, setCards] = useState([]);

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
                <MoviesList cards={cards} onLike={handleCardLike} />
                <Button className="movies__more-button" onClick={getMore}>Ещё</Button>
            </main>
            <Footer />
        </>
    );
}

export default Movies;