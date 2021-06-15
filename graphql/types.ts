export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
  nps: Nps;
};

export type Nps = {
  __typename?: 'NPS';
  id: Scalars['ID'];
  currentPeriod: Scalars['Int'];
  lastPeriod: Scalars['Int'];
  avg: Scalars['Int'];
};
