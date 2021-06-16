jest.mock('@apollo/client');
import { useCompanies } from '../index';
import { useQuery } from '@apollo/client';
import { Dashboard } from '../../../graphql/types';

describe('useCompanies', () => {
  let dashboardMock: Dashboard;
  beforeAll(() => {
    dashboardMock = {
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
      companies: [
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
      ],
    };

    (useQuery as jest.Mock).mockReturnValue({
      data: {
        dashboard: dashboardMock,
      },
      loading: undefined,
      error: undefined,
    });
  });

  test('correctly queries for companies', () => {
    const { data } = useCompanies();
    expect(data).toEqual(dashboardMock);
  });
});
