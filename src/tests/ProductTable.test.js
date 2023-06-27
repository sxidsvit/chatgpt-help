import React from 'react';
import { render } from '@testing-library/react'

import { ProductTable } from '../components/ProductTable';
import { MOCK_PRODUCT_LIST, MOCK_COLUMNS_ALL, MOCK_SCENARIOS } from "./mocks";

describe('ProductTable component', () => {
  it('should display all product data when all columns are visible', () => {
    // given
    const { container } = render(<ProductTable
      products={MOCK_PRODUCT_LIST}
      columns={MOCK_COLUMNS_ALL}
    />);

    // then
    for (const product of MOCK_PRODUCT_LIST){
      expect(container).toHaveTextContent(product.id);
      expect(container).toHaveTextContent(product.name);
      expect(container).toHaveTextContent(product.department);
      expect(container).toHaveTextContent(product.price);
      expect(container).toHaveTextContent(product.currency);
    }
  });

  for (const { scenario, product, columns } of MOCK_SCENARIOS){
    it(`should display only chosen columns for a given product (scenario: ${scenario}, product: ${product.name})`, () => {
      // given
      const { container } = render(<ProductTable
        products={[product]}
        columns={columns}
      />);
      const allTableCells = [...container.querySelectorAll('td')].map(node => node.textContent);

      for (const column in columns) {
        const expectedLabel = String(product[column]);

        // then
        if (columns[column]) {
          expect(allTableCells).toContain(expectedLabel);
        } else {
          expect(allTableCells).not.toContain(expectedLabel);
        }
      }
    });
  }

});
