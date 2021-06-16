import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { mockQueries } from './mocks';

export const Provider: React.FC = ({ children }) => (
  <MockedProvider mocks={mockQueries()}>
    <>{children}</>
  </MockedProvider>
);
