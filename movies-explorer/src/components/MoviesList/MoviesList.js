import MovieCard from './MovieCard';
import './MoviesList.css';

function MoviesList({ cards, onLike, onDelete }) {
    return (
        <div className="movies-list">
            {
                cards.map((card) => {
                    return (
                        <MovieCard key={card._id} card={card} onLike={onLike} onDelete={onDelete} />
                    )
                })
            }
        </div>
    );
}

export default MoviesList;