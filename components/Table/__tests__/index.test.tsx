import '@testing-library/jest-dom/extend-expect';
import { RenderResult, render } from '@testing-library/react';
import React from 'react';
import { Table } from '../index';

describe('Table', () => {
  let renderResult: RenderResult;
  const data = [
    {
      id: '#6b3b2a',
      name: 'Hermiston and Sons',
      segment: 'iterate enterprise e-markets',
      contract: 'Kling - Herman',
      renewals: 35331,
      isCritical: false,
      nps: {
        id: '5169aed7-9f4e-4fad-8c2c-6db25d917ce1',
        currentPeriod: 93487,
        lastPeriod: 98934,
        avg: 8574,
      },
    },
    {
      id: '#75604c',
      name: 'Stiedemann - Mraz',
      segment: 'benchmark dot-com metrics',
      contract: 'Kutch - Schmeler',
      renewals: 9300,
      isCritical: false,
      nps: {
        id: '38ce90ad-eecc-469e-a06e-dd2d135886cb',
        currentPeriod: 74749,
        lastPeriod: 46816,
        avg: 65374,
      },
    },
    {
      id: '#5d0a67',
      name: 'Williamson Group',
      segment: 'recontextualize wireless solutions',
      contract: "O'Conner, Schneider and Senger",
      renewals: 14901,
      isCritical: false,
      nps: {
        id: '8a4f5c49-1ffe-48f8-ad30-09435605bc6d',
        currentPeriod: 67119,
        lastPeriod: 22756,
        avg: 96744,
      },
    },
    {
      id: '#404524',
      name: 'Koelpin - Veum',
      segment: 'exploit distributed metrics',
      contract: 'Schuppe, Champlin and Jast',
      renewals: 99965,
      isCritical: true,
      nps: {
        id: 'b71608fb-b1ea-46d3-9482-1b448e2c2c85',
        currentPeriod: 74465,
        lastPeriod: 79164,
        avg: 20045,
      },
    },
    {
      id: '#2e1b58',
      name: 'Rice Group',
      segment: 'exploit cutting-edge e-commerce',
      contract: 'Dooley and Sons',
      renewals: 34362,
      isCritical: true,
      nps: {
        id: '6fc8adcc-cc0b-4941-8b27-767847bf73f5',
        currentPeriod: 15497,
        lastPeriod: 45342,
        avg: 94705,
      },
    },
    {
      id: '#296f19',
      name: 'Legros, Morissette and Farrell',
      segment: 'extend proactive experiences',
      contract: 'Kemmer, Schneider and Zieme',
      renewals: 36928,
      isCritical: true,
      nps: {
        id: '5466ee83-45a2-4136-bacd-fb2a005e987d',
        currentPeriod: 81125,
        lastPeriod: 95259,
        avg: 14959,
      },
    },
    {
      id: '#15791b',
      name: 'Olson and Sons',
      segment: 'leverage proactive platforms',
      contract: 'Barton Group',
      renewals: 91614,
      isCritical: false,
      nps: {
        id: '24253d70-0f21-4f03-9cab-9909adb4ddbd',
        currentPeriod: 61852,
        lastPeriod: 42321,
        avg: 92146,
      },
    },
    {
      id: '#571545',
      name: 'Koch LLC',
      segment: 'extend clicks-and-mortar communities',
      contract: 'Keebler, Pfannerstill and Lakin',
      renewals: 81438,
      isCritical: false,
      nps: {
        id: '62f19572-66a6-408a-aab3-35b52998e5ee',
        currentPeriod: 63790,
        lastPeriod: 98423,
        avg: 79988,
      },
    },
    {
      id: '#4b0a50',
      name: 'Ryan - Kshlerin',
      segment: 'strategize granular methodologies',
      contract: 'Bode and Sons',
      renewals: 43895,
      isCritical: false,
      nps: {
        id: '41ff0b83-e074-4ce9-910c-527166131650',
        currentPeriod: 51730,
        lastPeriod: 54266,
        avg: 34529,
      },
    },
    {
      id: '#51331f',
      name: 'Schmeler - Thiel',
      segment: 'incentivize robust initiatives',
      contract: 'Dickinson, Wehner and Rolfson',
      renewals: 71148,
      isCritical: true,
      nps: {
        id: 'b02f391b-4af1-445b-8960-94e62fbbbc80',
        currentPeriod: 31684,
        lastPeriod: 37333,
        avg: 16918,
      },
    },
  ];

  const sortState = { value: 'id', label: 'ID' };

  const doRender = (showCritical: boolean) => {
    renderResult = render(
      <Table
        loading={false}
        companies={data}
        sortState={sortState}
        showCritical={showCritical}
      />
    );
  };

  it('renders correctly with showCritical false', () => {
    doRender(false);

    const { container } = renderResult;

    expect(container).toMatchSnapshot();
  });

  it('renders correctly with showCritical true', () => {
    doRender(true);

    const { container } = renderResult;

    expect(container).toMatchSnapshot();
  });
});
