import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { getCompaniesStatsQueryMock } from '../../graphql/mocks';

export const Provider: React.FC = ({ children }) => (
  <MockedProvider mocks={[getCompaniesStatsQueryMock]}>
    <>{children}</>
  </MockedProvider>
);
