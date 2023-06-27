import React from 'react';
import { fireEvent, render } from '@testing-library/react'

import { ColumnToggle } from '../components/ColumnToggle';
import { MOCK_COLUMNS_ALL_BUT_ID } from './mocks';

describe('ToggleColumn', () => {
  
  const toggles = MOCK_COLUMNS_ALL_BUT_ID

  for (const toggle in toggles) {
    it(`should invoke the onColumnToggle callback after "${toggle}" checkbox was clicked`, () => {
      // given
      const spy = jest.fn();
      const { getByLabelText } = render(<ColumnToggle
        toggles={toggles}
        onColumnToggle={spy}
      />);

      // when
      const checkbox = getByLabelText(toggle)
      fireEvent.click(checkbox, { target: { name: toggle }})

      // then
      expect(spy).toHaveBeenCalledWith(toggle, !toggles[toggle]);
    });
  }

  const toggleShouldBeChecked = (toggles, columnName) => toggles[columnName]

  it('should display (un)checked column checkboxes after initial render', () => {
    for (const column in toggles) {
      // given
      const { getByLabelText } = render(<ColumnToggle
        toggles={toggles}
        onColumnToggle={() => {}}
      />);

      // then
      const checkbox = getByLabelText(column)
      if (toggleShouldBeChecked(toggles, column)){
        expect(checkbox).toBeChecked();
      } else {
        expect(checkbox).not.toBeChecked();
      }
    }
  });
});
