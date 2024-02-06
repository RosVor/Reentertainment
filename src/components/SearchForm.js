import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchForm = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams] = useSearchParams(); 

  const handleSearch = async (e) => {
    e.preventDefault();
    searchParams.set('query', searchQuery); 

    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
