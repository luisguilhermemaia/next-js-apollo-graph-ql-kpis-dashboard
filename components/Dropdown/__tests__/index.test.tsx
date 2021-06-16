import '@testing-library/jest-dom/extend-expect';
import { RenderResult, render } from '@testing-library/react';
import React from 'react';
import { Dropdown } from '../index';

describe('Dropdown', () => {
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
      <Dropdown
        setState={jest.fn()}
        items={items}
        value={items[0]}
        label="Filter By"
      />
    );
  };

  it('renders correctly', () => {
    doRender();

    const { container } = renderResult;

    expect(container).toMatchSnapshot();
  });
});
