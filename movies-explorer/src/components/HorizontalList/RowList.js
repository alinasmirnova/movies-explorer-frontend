import './RowList.css';

function RowList({ children, className }) {
    return (
        <ul className={`row-list ${className}`}>
            {
                children.map((child) => {
                    return (
                        <li className="row-list__item">
                            {child}
                        </li>
                    );
                })
            }            
        </ul>
    );
}

export default RowList;