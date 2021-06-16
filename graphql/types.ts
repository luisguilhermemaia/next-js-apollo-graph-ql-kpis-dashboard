export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  dashboard: Dashboard;
};

export type Dashboard = {
  __typename?: 'Dashboard';
  id: Scalars['ID'];
  activeSource: ActiveSource;
  weeklyActive: WeeklyActive;
  nps: Nps;
  companies: Array<Company>;
};

export type ActiveSource = {
  __typename?: 'ActiveSource';
  id: Scalars['ID'];
  currentPeriod: Scalars['Int'];
  lastPeriod: Scalars['Int'];
};

export type WeeklyActive = {
  __typename?: 'WeeklyActive';
  id: Scalars['ID'];
  currentPeriod: Scalars['Int'];
  lastPeriod: Scalars['Int'];
};

export type Company = {
  __typename?: 'Company';
  id: Scalars['ID'];
  name: Scalars['String'];
  segment: Scalars['String'];
  contract: Scalars['String'];
  renewals: Scalars['Int'];
  isCritical: Scalars['Boolean'];
  nps: Nps;
};

export type Nps = {
  __typename?: 'NPS';
  id: Scalars['ID'];
  currentPeriod: Scalars['Int'];
  lastPeriod: Scalars['Int'];
  avg: Scalars['Int'];
};

export enum SortEnum {
  ID = 'id',
  SEGMENT = 'segment',
  CONTRACT = 'contract',
  RENEWALS = 'renewals',
  BEST_NPS_AVG = 'bestNpsAvg',
  WORSE_NPS_AVG = 'worseNpsAvg',
  COMPANY_NAME = 'companyName'
}

export type DropdownItem = {
  value: string;
  label: string;
  payload?: FilterValues;
};

export type FilterValues = {
  timeUnit: string;
  timeUnitCount: number;
};

type FilterEnumType = {
  [key: string]: FilterValues;
};

export const FilterEnum: FilterEnumType = {
  THIS_WEEK: { timeUnit: 'WEEK', timeUnitCount: 0 },
  LAST_WEEK: { timeUnit: 'WEEK', timeUnitCount: 1 },
  THIS_MONTH: { timeUnit: 'MONTH', timeUnitCount: 0 },
  LAST_MONTH: { timeUnit: 'MONTH', timeUnitCount: 1 },
  THIS_QUARTER: { timeUnit: 'QUARTER', timeUnitCount: 0 },
  LAST_QUARTER: { timeUnit: 'QUARTER', timeUnitCount: 1 },
  THIS_YEAR: { timeUnit: 'YEAR', timeUnitCount: 0 },
  LAST_YEAR: { timeUnit: 'YEAR', timeUnitCount: 1 },
};

export const sortItems: DropdownItem[] = [
  { value: SortEnum.ID, label: 'ID' },
  { value: SortEnum.SEGMENT, label: 'Segment' },
  { value: SortEnum.COMPANY_NAME, label: 'Company Name' },
  { value: SortEnum.CONTRACT, label: 'Contract' },
  { value: SortEnum.RENEWALS, label: 'Renewals' },
  {
    value: SortEnum.BEST_NPS_AVG,
    label: 'Best NPS Avg',
  },
  {
    value: SortEnum.WORSE_NPS_AVG,
    label: 'Worse NPS Avg',
  },
];

export const filterItems: DropdownItem[] = [
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
  {
    value: 'THIS_MONTH',
    label: 'This Month',
    payload: { timeUnit: 'MONTH', timeUnitCount: 0 },
  },
  {
    value: 'LAST_MONTH',
    label: 'Last Month',
    payload: { timeUnit: 'MONTH', timeUnitCount: 1 },
  },
  {
    value: 'THIS_QUARTER',
    label: 'This Quarter',
    payload: { timeUnit: 'QUARTER', timeUnitCount: 0 },
  },
  {
    value: 'LAST_QUARTER',
    label: 'Last Quarter',
    payload: { timeUnit: 'QUARTER', timeUnitCount: 1 },
  },
  {
    value: 'THIS_YEAR',
    label: 'This Year',
    payload: { timeUnit: 'YEAR', timeUnitCount: 0 },
  },
  {
    value: 'LAST_YEAR',
    label: 'Last Year',
    payload: { timeUnit: 'YEAR', timeUnitCount: 1 },
  },
];
