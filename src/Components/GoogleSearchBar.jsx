import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const GoogleSearchBar = () => {
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(`http://www.google.com/search?q=${search}`, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className='google-search-form'>
      <div className='google-search-control'>
        <FontAwesomeIcon
          icon={faSearch}
          className='search-icon'
          onClick={handleSubmit}
        />
        <input
          type='text'
          name='search'
          id='search'
          placeholder='Search BOO-gle'
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </form>
  );
};

export default GoogleSearchBar;
