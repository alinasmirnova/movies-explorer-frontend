import Button from '../../Button';
import { formatDuration } from '../../../utils/formatting';
import likeIcon from '../../../images/like.svg';
import deleteIcon from '../../../images/delete.svg';
import './MovieCard.css';

function MovieCard({ card, onLike, onDelete }) {
    return (
        <div className="card">
            <img className="card__thumbnail" src={card.thumbnail} alt={card.nameRU} />
            <h2 className="card__title">{card.nameRU}</h2>
            <Button className="card__action" onClick={onLike ?? onDelete}>
                { onLike && <img className="card__like-icon" src={likeIcon} alt="Сохранить"/> }
                { onDelete && <img className="card__delete-icon" src={deleteIcon} alt="Удалить"/> }
            </Button>
            <div className="card__delimeter" />
            <p className="card__duration">{formatDuration(card.duration)}</p>
        </div>
    );
}

export default MovieCard;
