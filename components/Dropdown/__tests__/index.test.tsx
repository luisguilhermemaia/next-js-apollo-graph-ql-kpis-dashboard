import { RenderResult, render } from '@testing-library/react';
import React from 'react';

import { Dropdown } from '../index';
import { MockedProvider } from '@apollo/client/testing';

describe('CountriesDropdown', () => {
  let renderResult: RenderResult;
  const items = [
    {
      value: 'THIS_WEEK',
      label: 'This Week',
      payload: { timeUnit: 'WEEK', timeUnitCount: 0 },
    },
    {
      value: 'LAST_WEEK',
      label: 'Last Week',
      payload: { timeUnit: 'WEEK', timeUnitCount: 1 },
    },
  ];
  const doRender = () => {
    renderResult = render(
      <MockedProvider>
        <Dropdown
          setState={jest.fn()}
          items={items}
          value={items[0]}
          label="Filter By"
        />
      </MockedProvider>
    );
  };

  it('renders correctly', () => {
    doRender();

    const { container } = renderResult;

    expect(container).toMatchSnapshot();
  });
});
