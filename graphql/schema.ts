import { SchemaLink } from '@apollo/client/link/schema';
import { makeExecutableSchema } from '@graphql-tools/schema';

import gql from 'graphql-tag';

export const typeDefs = gql`
  type Query {
    dashboard: Dashboard!
  }

  type Dashboard {
    id: ID!
    activeSource: ActiveSource!
    weeklyActive: WeeklyActive!
    nps: NPS!
    companies: [Company!]!
  }

  type ActiveSource {
    id: ID!
    currentPeriod: Int!
    lastPeriod: Int!
  }

  type WeeklyActive {
    id: ID!
    currentPeriod: Int!
    lastPeriod: Int!
  }

  type Company {
    id: ID!
    name: String!
    segment: String!
    contract: String!
    renewals: Int!
    nps: NPS!
    isCritical: Boolean!
  }

  type NPS {
    id: ID!
    currentPeriod: Int!
    lastPeriod: Int!
    avg: Int!
  }
`;

export const schemaLink = new SchemaLink({
  schema: makeExecutableSchema({ typeDefs }),
});
