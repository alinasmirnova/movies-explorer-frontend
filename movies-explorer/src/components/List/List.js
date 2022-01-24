import './List.css';

function List({ children, className }) {
    return (
        <ul className={`row-list ${className}`}>
            {
                children.map((child, i) => {
                    return (
                        <li className="row-list__item" key={i}>
                            {child}
                        </li>
                    );
                })
            }            
        </ul>
    );
}

export default List;