import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        onSearch(value);
    };

    return (
        <div className="search-bar mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="Search for products..."
                value={searchTerm}
                onChange={handleSearch}
                style={{border: 'none', outline: 'none',boxShadow: '1px 2px 9px #d3d3d3'}}
            />
        </div>
    );
};

export default SearchBar;