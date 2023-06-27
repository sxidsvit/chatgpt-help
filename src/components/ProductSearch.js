import React, { useState } from 'react';
import '../styles/Search.css';
import { ColumnToggle } from './ColumnToggle';
import { ProductTable } from './ProductTable';
import { ProductFilters } from './ProductFilters';
import productsData from '../assets/products.json'; // Импорт данных о продуктах

export const ProductSearch = (props) => {
  const [price, setPrice] = useState({ minPrice: '', maxPrice: '' });

  const [toggles, setToggles] = useState({
    id: true,
    name: true,
    department: true,
    price: true,
    currency: true,
  });

  const onPriceChange = (name, value) => {
    setPrice((prevPrice) => ({
      ...prevPrice,
      [name]: value,
    }));
  };

  const onToggle = (name, checked) => {
    setToggles((prevToggles) => ({
      ...prevToggles,
      [name]: checked,
    }));
  };

  const onFilter = () => {
    // Фильтрация продуктов по заданному диапазону цен
    const filteredItems = productsData.filter((product) => {
      const productPrice = parseFloat(product.price);
      const { minPrice, maxPrice } = price;

      if (minPrice && maxPrice) {
        return productPrice >= parseFloat(minPrice) && productPrice <= parseFloat(maxPrice);
      } else if (minPrice) {
        return productPrice >= parseFloat(minPrice);
      } else if (maxPrice) {
        return productPrice <= parseFloat(maxPrice);
      }

      return true;
    });

    return filteredItems;
  };

  const filteredItems = onFilter(); // Получение отфильтрованных продуктов

  return (
    <div className="Products">
      <ProductFilters
        minPrice={price.minPrice}
        maxPrice={price.maxPrice}
        onPriceChange={onPriceChange}
      />

      <ColumnToggle
        onToggle={onToggle}
        toggles={toggles}
      />

      <ProductTable
        products={filteredItems}
        columns={toggles}
      />
    </div>
  );
};

export default ProductSearch;
