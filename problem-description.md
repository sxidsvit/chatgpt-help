# React based search & filter functionalities for an online shop  

* Checkbox fields that allow users to display or hide specific columns in the table of products.
* Filter fields that allow users to set a range on the items prices.
* Users should be able to see the filtered or searched products in the table.
* Filtering should work when only one filter is applied (partial filtering) or both:
    * If the user provides only the "minimum price", the product price should be within the [minPrice, infinity] range.
    * If the user provides the "maximum price" only, the product price should be within the [0, maxPrice] range.
    * If the user provides both prices (minimum and maximum), the product price should be within the [minPrice, maxPrice] range.
    * If the user provides negative price filters, then all rules above still apply - no products are expected to have negative price (e.g. minPrice:-50, maxPrice:-10 will return no results). The same applies to `0` filters - if the user applies [0, 0] filters, no products are expected to have price equal to zero (minPrice:0, maxPrice: 0).

---- 

* Make sure that products are imported from the `products.json` inside `/src/assets/` folder, which will be used for the search/filter functionalities.
* Put the imported data in the `products` array in the `ProductSearch` component.
* Implement the toggle functionality by adding a handler to the checkbox change in the `ColumnToggle` component.
* Pass a columns object to the `ProductTable` and reflect the change in the checkbox appropriately (by displaying or hiding the column).
* Pass the filtered products to the `ProductTable` component, so they get displayed in the table.
* Show each item from the passed prop in the table inside the `ProductTable` component.
* Pass the `minPrice` and the `maxPrice` attributes to the `ProductFilters` component as props.
* Implement the change input and submit the form handlers to the `ProductFilters` component.
* Change the filtered products that are displayed in the `ProductTable`, so that it only contains the products with a price within the specified range.

Note that you're not allowed to change names or signatures of functions passed to components as properties.

----------