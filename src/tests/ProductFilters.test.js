import React from 'react';
import { render, fireEvent } from '@testing-library/react'

import { ProductFilters } from '../components/ProductFilters'

describe('ProductFilters component', () => {
  it('should invoke the onPriceChange callback after "minimum price" input value changed', () => {
    // given
    const onPriceChange = jest.fn();
    const { getByLabelText } = render(<ProductFilters
      minPrice=''
      onPriceChange={onPriceChange}
    />);

    // when
    fireEvent.change(getByLabelText('Min Price:'), { target: {
      name: 'minPrice',
      value: 123
    }});

    // then
    expect(onPriceChange).toHaveBeenCalledWith('minPrice', 123);
  });

  it('should invoke the onPriceChange callback after "maximum price" input value changed', () => {
    // given
    const onPriceChange = jest.fn();
    const { getByLabelText } = render(<ProductFilters
      minPrice=''
      onPriceChange={onPriceChange}
    />);

    // when
    fireEvent.change(getByLabelText('Max Price:'), { target: {
      name: 'maxPrice',
      value: 456
    }});

    // then
    expect(onPriceChange).toHaveBeenCalledWith('maxPrice', 456);
  });

  it('should display the "minimum price" in input according to passed props', () => {
    // given
    const { getByLabelText } = render(<ProductFilters minPrice='123'/>);
    const input = getByLabelText('Min Price:')

    // then
    expect(input.value).toBe('123');
  });

  it('should display the "maximum price" in input according to passed props', () => {
    // given
    const { getByLabelText } = render(<ProductFilters maxPrice='456'/>);
    const input = getByLabelText('Max Price:')

    // then
    expect(input.value).toBe('456');
  });
});
