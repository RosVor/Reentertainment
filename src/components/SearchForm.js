import React, { useState } from 'react';
import '../style/SearchForm.css';
const SearchForm = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState(''); 

  const handleSearch = async (e) => {
    e.preventDefault();

    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  return (
    <form onSubmit={handleSearch} className="search-form">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
        placeholder="Search for movies..."
      />
      <button type="submit" className="search-button">Search</button>
    </form>
  );
};

export default SearchForm;
