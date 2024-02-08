import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState(''); 

  const handleSearch = async (e) => {
    e.preventDefault();

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
