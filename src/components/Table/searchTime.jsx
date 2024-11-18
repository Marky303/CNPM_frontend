import React, { useState } from 'react';
import './searchTime.css'; // CSS tùy chỉnh

const SearchTime = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSearch = () => {
    console.log('Searching between:', { startDate, endDate });
  };

  return (
    <div className="date-range-picker">
      <div className="date-picker">
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="date-input"
        />
        <span className="date-separator"> ~ </span>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="date-input"
        />
      </div>
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
    </div>
  );
};

export default SearchTime;