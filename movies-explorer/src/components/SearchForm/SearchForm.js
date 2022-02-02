import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import { KEYWORD_MISSING_MSG } from '../../utils/consts';
import { fromLocalStorage, toLocalStorage } from '../../utils/localStorage';
import Button from '../Button';
import FilterCheckbox from './FilterCheckbox';
import './SearchForm.css';

function SearchForm({ onSubmit, onShortsOnlyChange, storageTextKey, storageShortsOnlyKey, required }) {
    const [value, setValue] = useState('');
    const [shortsOnly, setShortsOnly] = useState(false);
    const [errorText, setErrorText] = useState('');

    useEffect(() => {
        setValue(fromLocalStorage(storageTextKey) ?? '');
        setShortsOnly(fromLocalStorage(storageShortsOnlyKey) ?? false);
    }, [storageTextKey, storageShortsOnlyKey]);

    const handleValueChange = (e) => {
        setValue(e.target.value);
        setErrorText('');
    }

    const handleShortsOnlyChange = (e) => {
        setShortsOnly(e.target.checked);
        toLocalStorage(storageShortsOnlyKey, e.target.checked);
        onShortsOnlyChange(e.target.checked);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        toLocalStorage(storageTextKey, value);
        toLocalStorage(storageShortsOnlyKey, shortsOnly);
        if (value === '' && required) {
            setErrorText(KEYWORD_MISSING_MSG);
        }
        else {
            onSubmit(value, shortsOnly);
        }
    }

    return (
        <div className="search-form">
            <form name="search-films">
                <div className="search-form__container">
                    <input name="title" className="search-form__input" type="text" placeholder="Фильм" value={value} onChange={handleValueChange} required={required}/>
                    <Button className="search-form__submit" type="submit" onClick={handleSubmit}>Поиск</Button>
                    <span className="search-form__error">{errorText}</span>
                </div>
            </form>
            <FilterCheckbox name="shortsOnly" value={shortsOnly} onChange={handleShortsOnlyChange}/>
        </div>        
    );
}

export default SearchForm;