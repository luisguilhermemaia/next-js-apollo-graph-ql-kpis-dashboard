import gql from 'graphql-tag';

export const GET_COMPANIES_STATS = gql`
  query ($timeUnit: String, $timeUnitCount: Int) {
    dashboard(timeUnit: $timeUnit, timeUnitCount: $timeUnitCount) {
      id
      activeSource {
        id
        currentPeriod
        lastPeriod
      }
      weeklyActive {
        id
        currentPeriod
        lastPeriod
      }
      nps {
        id
        currentPeriod
        lastPeriod
        avg
      }
      companies {
        id
        name
        segment
        contract
        renewals
        isCritical
        nps {
          id
          currentPeriod
          lastPeriod
          avg
        }
      }
    }
  }
`;
