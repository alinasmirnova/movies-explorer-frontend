import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import { keywordMissingMsg, searchTextKey } from '../../utils/consts';
import { fromLocalStorage, toLocalStorage } from '../../utils/localStorage';
import Button from '../Button';
import FilterCheckbox from './FilterCheckbox';
import './SearchForm.css';

function SearchForm({ onSubmit }) {
    const [value, setValue] = useState('');
    const [shortsOnly, setShortsOnly] = useState(false);
    const [errorText, setErrorText] = useState('');

    useEffect(() => {
        setValue(fromLocalStorage(searchTextKey) ?? '');
    }, []);

    const handleValueChange = (e) => {
        setValue(e.target.value);
        setErrorText('');
    }

    const handleShortsOnlyChange = (e) => {
        setShortsOnly(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        toLocalStorage(searchTextKey, value);
        if (value === '') {
            setErrorText(keywordMissingMsg);
        }
        else {
            onSubmit(value, shortsOnly);
        }
    }

    return (
        <form name="search-films" className="search-form">
            <div className="search-form__container">
                <input name="title" className="search-form__input" type="text" placeholder="Фильм" value={value} onChange={handleValueChange} required/>
                <Button className="search-form__submit" type="submit" onClick={handleSubmit}>Поиск</Button>
                <span className="search-form__error">{errorText}</span>
            </div>
            <FilterCheckbox name="shortsOnly" value={shortsOnly} onChange={handleShortsOnlyChange}/>
        </form>
    );
}

export default SearchForm;