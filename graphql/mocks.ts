import * as Factory from 'factory.ts';
import faker from 'faker';
import {
  Dashboard,
  ActiveSource,
  WeeklyActive,
  Company,
  Nps,
  Query,
  FilterEnum,
} from './types';
import { MockedResponse } from '@apollo/client/testing';
import { GET_COMPANIES_STATS } from './queries/companies';

export const NPSMock = Factory.Sync.makeFactory<Nps>({
  __typename: 'NPS',
  id: Factory.each(() => faker.datatype.uuid()),
  currentPeriod: Factory.each(() => faker.datatype.number()),
  lastPeriod: Factory.each(() => faker.datatype.number()),
  avg: Factory.each(() => faker.datatype.number()),
});

export const CompanyMock = Factory.Sync.makeFactory<Company>({
  __typename: 'Company',
  id: Factory.each(() => faker.internet.color()),
  name: Factory.each(() => faker.company.companyName()),
  segment: Factory.each(() => faker.company.bs()),
  contract: Factory.each(() => faker.company.companyName()),
  renewals: Factory.each(() => faker.datatype.number()),
  nps: Factory.each(() => NPSMock.build()),
  isCritical: Factory.each(() => faker.datatype.boolean()),
});

export const WeeklyActiveMock = Factory.Sync.makeFactory<WeeklyActive>({
  __typename: 'WeeklyActive',
  id: Factory.each(() => faker.datatype.uuid()),
  currentPeriod: Factory.each(() => faker.datatype.number()),
  lastPeriod: Factory.each(() => faker.datatype.number()),
});

export const ActiveSourceMock = Factory.Sync.makeFactory<ActiveSource>({
  __typename: 'ActiveSource',
  id: Factory.each(() => faker.datatype.uuid()),
  currentPeriod: Factory.each(() => faker.datatype.number()),
  lastPeriod: Factory.each(() => faker.datatype.number()),
});

export const DashboardMock = Factory.Sync.makeFactory<Dashboard>({
  __typename: 'Dashboard',
  id: Factory.each(() => faker.datatype.uuid()),
  activeSource: Factory.each(() => ActiveSourceMock.build()),
  weeklyActive: Factory.each(() => WeeklyActiveMock.build()),
  nps: Factory.each(() => NPSMock.build()),
  companies: Factory.each(() => CompanyMock.buildList(10)),
});

export const mockQueries = (): Array<MockedResponse<Query>> =>
  Object.values(FilterEnum).map((filter) => ({
    request: {
      query: GET_COMPANIES_STATS,
      variables: filter,
    },
    result: {
      data: {
        dashboard: DashboardMock.build(),
      },
    },
  }));
