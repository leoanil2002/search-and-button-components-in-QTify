// src/SearchBar.js
import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search a song of your choice" />
      <button type="submit">
        <svg height="24" width="24" viewBox="0 0 24 24">
          <path d="M10 2a8 8 0 105.29 14.71l4.24 4.25a1 1 0 001.42-1.42l-4.25-4.24A8 8 0 0010 2zm0 2a6 6 0 110 12A6 6 0 0110 4z"/>
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
