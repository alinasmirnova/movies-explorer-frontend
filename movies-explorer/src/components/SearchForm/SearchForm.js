import { useState } from 'react/cjs/react.development';
import Button from '../Button';
import FilterCheckbox from './FilterCheckbox';
import './SearchForm.css';

function SearchForm() {
    const [value, setValue] = useState('');
    const [shortsOnly, setShortsOnly] = useState(false);

    const handleValueChange = (e) => {
        setValue(e.target.value);
    }

    const handleShortsOnlyChange = (e) => {
        setShortsOnly(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form name="search-films" className="search-form">
            <div className="search-form__container">
                <input name="title" className="search-form__input" type="text" placeholder="Фильм" value={value} onChange={handleValueChange} required/>
                <Button className="search-form__submit" type="submit" onClick={handleSubmit}>Поиск</Button>
            </div>
            <FilterCheckbox name="shortsOnly" value={shortsOnly} onChange={handleShortsOnlyChange}/>
        </form>
    );
}

export default SearchForm;