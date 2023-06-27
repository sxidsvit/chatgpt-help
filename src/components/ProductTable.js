import React from 'react';

export const ProductTable = (props) => {
  const { products, columns } = props;

  const displayHeader = () => {
    const selectedColumns = Object.keys(columns).filter((column) => columns[column]);
    // const itemCount = selectedColumns.length;
    const itemCount = products.length;
    const itemText = itemCount === 1 ? 'item' : 'items';
    return (
      <header>
        <strong>Products ({itemCount} {itemText})</strong>
      </header>
    );
  };

  const displayColumns = () => {
    return Object.keys(columns).map((column) => {
      if (columns[column]) {
        return <th key={column}>{column}</th>;
      }
      return null;
    });
  };

  const displayProducts = () => {
    return products.map((product) => (
      <tr key={product.id}>
        {Object.keys(columns).map((column) => {
          if (columns[column]) {
            return <td key={`${product.id}-${column}`}>{product[column]}</td>;
          }
          return null;
        })}
      </tr>
    ));
  };

  return (
    <div id="product-table">
      {displayHeader()}
      <table>
        <thead>
          <tr>
            {displayColumns()}
          </tr>
        </thead>
        <tbody>
          {displayProducts()}
        </tbody>
      </table>
    </div>
  );
};
