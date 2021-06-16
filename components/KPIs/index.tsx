import React, { FC } from 'react';
import styled from 'styled-components';

import { ActiveSource, Nps, WeeklyActive } from '../../graphql/types';
import { Spinner } from '../Spinner';
import { GlobalStyleType } from '../theme';

const BottomCircle = styled.div`
  background-color: ${({ theme }: GlobalStyleType) => theme?.circle};
  opacity: 0.3;
  position: absolute;
  top: 64px;
  left: 155px;
  height: 130px;
  width: 130px;
  display: inline-block;
  border-radius: 50%;
`;

const TopCircle = styled.div`
  background-color: ${({ theme }: GlobalStyleType) => theme?.circle};
  opacity: 0.3;
  position: absolute;
  bottom: 72px;
  left: 199px;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  display: inline-block;
`;

const StyledKPIsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1rem 0;
`;

const StyledKPICard = styled.div`
  border-radius: 2%;
  width: 250px;
  min-height: 125px;
  padding: 20px;
  color: #fff;
  position: relative;
  margin: 1.5rem 1rem;

  p,
  h3 {
    margin: 0;
    line-height: 2em;
  }

  h3 {
    font-size: 1.7em;
  }

  div {
    align-self: center;
  }
`;

const ActiveSourceContainer = styled(StyledKPICard)`
  background-image: linear-gradient(to right, #f6bf99, #f29d99);
`;

const WeeklyActiveContainer = styled(StyledKPICard)`
  background-image: linear-gradient(to right, #a7cdf5, #669ce8);
`;

const NpsContainer = styled(StyledKPICard)`
  background-image: linear-gradient(to right, #b8e9e5, #76d0be);
`;

const labels = {
  ACTIVE_SOURCING: 'Active Sourcing',
  WEEKLY_ACTIVE: 'Weekly Active',
  NPS: 'NPS',
  LAST_PERIOD: 'Last period',
};

type KPIsPropsType = {
  loading: boolean;
  activeSource?: ActiveSource | undefined;
  nps?: Nps | undefined;
  weeklyActive?: WeeklyActive | undefined;
};

export const KPIs: FC<KPIsPropsType> = ({
  activeSource,
  nps,
  weeklyActive,
  loading,
}) => {
  return (
    <StyledKPIsContainer>
      <ActiveSourceContainer>
        <div>
          <p>{labels.ACTIVE_SOURCING}</p>
          <h3>{loading ? <Spinner /> : activeSource?.currentPeriod}</h3>
          <p>
            <span>{loading ? '-' : activeSource?.lastPeriod}</span>{' '}
            {labels.LAST_PERIOD}
          </p>
        </div>
        <BottomCircle />
        <TopCircle />
      </ActiveSourceContainer>
      <WeeklyActiveContainer>
        <div>
          <p>{labels.WEEKLY_ACTIVE}</p>
          <h3>{loading ? <Spinner /> : weeklyActive?.currentPeriod}</h3>
          <p>
            <span>{loading ? '-' : weeklyActive?.lastPeriod}</span>{' '}
            {labels.LAST_PERIOD}
          </p>
        </div>
        <BottomCircle />
        <TopCircle />
      </WeeklyActiveContainer>
      <NpsContainer>
        <div>
          <p>{labels.NPS}</p>
          <h3>{loading ? <Spinner /> : nps?.currentPeriod}</h3>
          <p>
            <span>{loading ? '-' : nps?.lastPeriod}</span> {labels.LAST_PERIOD}
          </p>
        </div>
        <BottomCircle />
        <TopCircle />
      </NpsContainer>
    </StyledKPIsContainer>
  );
};
