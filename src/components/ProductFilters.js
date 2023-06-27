import React from 'react';

export const ProductFilters = (props) => {
  const { minPrice, maxPrice, onPriceChange } = props;

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    onPriceChange(name, parseFloat(value));
  };

  return (
    <div>
      <label htmlFor="minPrice">Min Price:</label>
      <input
        type="number"
        min="0"
        id="minPrice"
        name="minPrice"
        placeholder="Min price..."
        value={minPrice}
        onChange={handlePriceChange}
      />
      <label htmlFor="maxPrice">Max Price:</label>
      <input
        type="number"
        min="0"
        id="maxPrice"
        name="maxPrice"
        placeholder="Max price..."
        value={maxPrice}
        onChange={handlePriceChange}
      />
    </div>
  );
};
