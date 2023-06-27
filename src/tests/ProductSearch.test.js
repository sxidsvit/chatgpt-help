import { ProductSearchPageObject } from './ProductSearchPageObject'
import products from '../assets/products.json'

describe('ProductSearch component', () => {
  it('should display all products if no filters are applied', async () => {
    // given
    const search = new ProductSearchPageObject({ products })

    // then
    expect(search.displayedRowsCount()).toBe(products.length);
  });

  it('should display label including number of items', async () => {
    // given
    const search = new ProductSearchPageObject({ products })

    // then
    expect(search.getProductTableHeader()).toBe('Products (30 items)');
  });

  it('should display product row cells', async () => {
    // given
    const search = new ProductSearchPageObject({ products })

    // then
    const firstRow = search.getProductRowCells(0);
    expect(firstRow).toEqual(['PR-1', 'Beef - Tongue, Fresh', 'Food', '6.14', '$']);
  });

  it('should display all columns by default', async () => {
    // given
    const search = new ProductSearchPageObject({ products })

    // then
    const columnToggleLabels = search.getColumnToggleLabels()
    expect(columnToggleLabels).toEqual(['id', 'name', 'department', 'price', 'currency']);
  })

  it.each([
    [14, 5, 100, 'correct'],
    [8, 10, 1000, 'correct'],
    [1, 7.75, 7.75, 'correct'],
    [22, '', 10, 'correct (partial filter)'],
    [8, 10, '', 'correct (partial filter)'],
    [30, '', '', 'correct (partial filter)'],
  ])('should display %d products after filtering price between %d and %d (%s)', async (count, minPrice, maxPrice) => {
    // given
    const search = new ProductSearchPageObject({ products })

    // when
    await search.fillMinPriceInput(minPrice)
    await search.fillMaxPriceInput(maxPrice)

    // then
    expect(search.displayedRowsCount()).toBe(count);
  });
});
