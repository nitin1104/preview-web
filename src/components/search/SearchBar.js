import React from 'react';
import './SearchBar.css';


export default function SearchBar (props) {

  function setFName (value) {
    const webAddress = value.match(/\bwww?\.\S+/gi);
    props.onSearch(webAddress)
  }

  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        onBlur={(e) => setFName(e.target.value)}
        placeholder="Search for Website"
      />
    </div>
  );
}
