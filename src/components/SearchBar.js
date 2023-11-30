import React from "react";

function SearchBar({ onSort, onFilter }) {
  const handleFilterChange = (event) => {
    onFilter(event.target.value);
  };

  return (
    <div>
      <button onClick={() => onSort('alphabetically')}>Sort Alphabetically</button>
      <button onClick={() => onSort('price')}>Sort by Price</button>

      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilterChange}>
          <option value="all">All</option> 
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
