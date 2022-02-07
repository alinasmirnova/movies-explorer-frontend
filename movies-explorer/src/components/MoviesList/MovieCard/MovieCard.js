import Button from '../../Button';
import { formatDuration } from '../../../utils/formatting';
import likeIcon from '../../../images/like.svg';
import likeDisabledIcon from '../../../images/like-disabled.svg';
import deleteIcon from '../../../images/delete.svg';
import './MovieCard.css';
import ExternalLink from '../../ExternalLink';

function MovieCard({ card, onLike, onDelete }) {
    const onClick = (e) => {
        if (onLike){
            onLike(card);
        }
        else {
            onDelete(card);
        }
    }

    return (
        <div className="card">
            <ExternalLink className="card__thumbnail" to={card.trailer}>
                <img className="card__thumbnail-image" src={card.thumbnail} alt={card.nameRU} />
            </ExternalLink>
            <h2 className="card__title">{card.nameRU}</h2>
            <Button className="card__action" onClick={onClick}>
                { onLike && <img className="card__like-icon" src={card.isSaved ? likeIcon : likeDisabledIcon} alt={ card.isSaved ? "Удалить" : "Сохранить"}/> }
                { onDelete && <img className="card__delete-icon" src={deleteIcon} alt="Удалить"/> }
            </Button>
            <div className="card__delimeter" />
            <p className="card__duration">{formatDuration(card.duration)}</p>
        </div>
    );
}

export default MovieCard;
