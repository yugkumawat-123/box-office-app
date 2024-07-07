import { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [seacrhStr, setSeacrhStr] = useState('');
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

      <label>
        Shows
        <input
          type="radio"
          name="search-option"
          value="shows"
          checked={searchOption === 'shows'}
          onChange={onRadioChange}
        />
      </label>

      <label>
        Actors
        <input
          type="radio"
          name="search-option"
          value="Actors"
          checked={searchOption === 'Actors'}
          onChange={onRadioChange}
        />
      </label>

      <button type="submit">Search</button>
    </form>
  );
};
export default SearchForm;
