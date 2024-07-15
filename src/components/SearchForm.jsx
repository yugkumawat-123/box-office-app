import { useState } from 'react';
import { useSearchStr } from '../lib/useSearchStr.js';
import CustomRadio from './CustomRadio.jsx';

const SearchForm = ({ onSearch }) => {
  const [seacrhStr, setSeacrhStr] = useSearchStr('');
  const [searchOption, setSearchOption] = useState('shows');

  const onSearchInputChange = ev => {
    setSeacrhStr(ev.target.value);
  };

  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };

  const onSubmit = ev => {
    ev.preventDefault();

    const options = {
      q: seacrhStr,
      searchOption,
    };

    onSearch(options);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={seacrhStr} onChange={onSearchInputChange} />

      <CustomRadio
        label="Shows"
        name="search-option"
        value="shows"
        checked={searchOption === 'shows'}
        onChange={onRadioChange}
      />

      <CustomRadio
        label="Actors"
        name="search-option"
        value="Actors"
        checked={searchOption === 'Actors'}
        onChange={onRadioChange}
      />

      <button type="submit">Search</button>
    </form>
  );
};
export default SearchForm;
