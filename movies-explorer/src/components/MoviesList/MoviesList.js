import MovieCard from './MovieCard';
import './MoviesList.css';

function MoviesList({ cards, onLike, onDelete, className }) {
    return (
        <div className={`movies-list ${className}`}>
            {
                cards.map((card) => {
                    return (
                        <MovieCard key={card._id ?? card.movieId} card={card} onLike={onLike} onDelete={onDelete} />
                    )
                })
            }
        </div>
    );
}

export default MoviesList;