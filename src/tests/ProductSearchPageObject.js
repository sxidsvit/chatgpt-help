import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, fireEvent, screen } from '@testing-library/react'

import { ProductSearch } from '../components/ProductSearch';

export class ProductSearchPageObject {
  constructor({ products }){
    this.handler = render(<ProductSearch products={products} />);
    this.elements = {
      minPrice: this.handler.getByLabelText('Min Price:'),
      maxPrice: this.handler.getByLabelText('Max Price:'),
    }
  }

  async fillMinPriceInput(value) {
    act(() => {
      fireEvent.change(this.elements.minPrice, { target: { value: value, name: 'minPrice' } })
    });
    return await this.waitForComponentToUpdate()
  }
  
  async fillMaxPriceInput(value) {
    act(() => {
      fireEvent.change(this.elements.maxPrice, { target: { value: value, name: 'maxPrice' } })
    });
    return await this.waitForComponentToUpdate()
  }
  
  displayedRowsCount() {
    return this.handler.container.querySelectorAll('#product-table tbody tr').length
  }

  async waitForComponentToUpdate(){
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });
  };

  getProductTableHeader() {
    return this.handler.container.querySelector('#product-table header').textContent
  }

  getProductRowCells(rowIdx) {
    const cells = this.handler.container.querySelectorAll('#product-table tbody tr')[rowIdx].querySelectorAll('td');
    return [...cells].map(node => node.textContent)
  }

  getColumnToggleLabels(){
    const labels = this.handler.container.querySelectorAll('.toggle-columns label');
    return [...labels].map(node => node.textContent)
  }
}
