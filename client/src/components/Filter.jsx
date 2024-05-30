import React from 'react';

const Filter = ({ filters, setFilters }) => {
    const handleCheckboxChange = (event) => {
        const { name, value, checked } = event.target;

        setFilters((prevFilters) => {
            if (checked) {
                return { ...prevFilters, [name]: [...prevFilters[name], value] };
            } else {
                return { ...prevFilters, [name]: prevFilters[name].filter((item) => item !== value) };
            }
        });
    };

    return (
        <div className="filter-container" style={{flexDirection:'column'}}>
            <h4 className='mb-3' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Filters</h4>
            
            <div className='mb-2'>
                <h5>Gender</h5>
                <label>
                    <input
                        type="checkbox"
                        name="gender"
                        value="male"
                        onChange={handleCheckboxChange}
                    />
                    Male
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="gender"
                        value="female"
                        onChange={handleCheckboxChange}
                    />
                    Female
                </label>
            </div>

            <div className='mb-2'>
                <h5>Color</h5>
                <label>
                    <input
                        type="checkbox"
                        name="color"
                        value="green"
                        onChange={handleCheckboxChange}
                    />
                    Green
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="color"
                        value="blue"
                        onChange={handleCheckboxChange}
                    />
                    Blue
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="color"
                        value="black"
                        onChange={handleCheckboxChange}
                    />
                    Black
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="color"
                        value="pink"
                        onChange={handleCheckboxChange}
                    />
                    Pink
                </label>
            </div>

            <div className='mb-2'>
                <h5>Price Range</h5>
                <label>
                    <input
                        type="checkbox"
                        name="priceRange"
                        value="0-250"
                        onChange={handleCheckboxChange}
                    />
                    Rs.0-Rs.250
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="priceRange"
                        value="251-450"
                        onChange={handleCheckboxChange}
                    />
                    Rs.251-Rs.450
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="priceRange"
                        value="450+"
                        onChange={handleCheckboxChange}
                    />
                    Rs.450
                </label>
            </div>

            <div className='mb-2'>
                <h5>Type</h5>
                <label>
                    <input
                        type="checkbox"
                        name="type"
                        value="polo"
                        onChange={handleCheckboxChange}
                    />
                    Polo
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="type"
                        value="hoodie"
                        onChange={handleCheckboxChange}
                    />
                    Hoodie
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="type"
                        value="round"
                        onChange={handleCheckboxChange}
                    />
                    Round
                </label>
            </div>
        </div>
    );
};

export default Filter;