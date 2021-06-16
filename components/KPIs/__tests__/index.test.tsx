import '@testing-library/jest-dom/extend-expect';
import { RenderResult, render } from '@testing-library/react';
import React from 'react';
import { KPIs } from '../index';

describe('KPIs', () => {
  let renderResult: RenderResult;
  const data = {
    id: '4a6134be-007a-4a0b-9d3e-11885a40c5e9',
    activeSource: {
      id: '45803e2f-f109-4299-bdf7-66106b01f7cf',
      currentPeriod: 92500,
      lastPeriod: 1127,
    },
    weeklyActive: {
      id: '65154554-7b6a-4d1d-9691-4609ecc059fe',
      currentPeriod: 25524,
      lastPeriod: 95351,
    },
    nps: {
      id: 'e8dc4f9a-17e8-4ec9-9a46-5bb0a31f162d',
      currentPeriod: 60124,
      lastPeriod: 24545,
      avg: 67933,
    },
  };

  const doRender = () => {
    renderResult = render(
      <KPIs
        loading={false}
        activeSource={data.activeSource}
        nps={data.nps}
        weeklyActive={data.weeklyActive}
      />
    );
  };

  it('renders correctly', () => {
    doRender();

    const { container } = renderResult;

    expect(container).toMatchSnapshot();
  });
});
