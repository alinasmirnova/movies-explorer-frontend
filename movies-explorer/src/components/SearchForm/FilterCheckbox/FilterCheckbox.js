import './FilterCheckbox.css';

function FilterCheckbox({ name, value, onChange }) {
    return (
        <div className="filter-checkbox">
            <label className='filter-checkbox__container'>
                <input name={name} className='filter-checkbox__input' checked={value} type="checkbox" onChange={onChange} />
                <span className='filter-checkbox__checkbox'></span>
            </label>
            
            <p className='filter-checkbox__text'>Короткометражки</p>
        </div>
    );
}

export default FilterCheckbox;