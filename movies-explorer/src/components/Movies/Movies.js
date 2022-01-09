import Footer from '../Footer';
import Header from '../Header';
import './Movies.css';
import SearchForm from './SearchForm';

function Movies() {
    return (
        <>
            <Header activeTab="movies"/>
            <main className='movies'>
                <SearchForm />
            </main>
            <Footer />
        </>
    );
}

export default Movies;