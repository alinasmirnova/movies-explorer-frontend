import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import demoCards from '../../utils/demoCards';
import Footer from '../Footer';
import Header from '../Header';
import MoviesList from '../MoviesList';
import './Movies.css';
import SearchForm from './SearchForm';

function Movies() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(demoCards);
    }, []);

    const handleCardLike = () => {

    }

    return (
        <>
            <Header activeTab="movies"/>
            <main className='movies'>
                <SearchForm />
                <MoviesList cards={cards} onLike={handleCardLike} />
            </main>
            <Footer />
        </>
    );
}

export default Movies;