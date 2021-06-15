import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components';

import { ActiveSource, Nps, WeeklyActive } from '../../graphql/types';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

const BottomCircle = styled.div`
  height: 110px;
  width: 120px;
  background-color: #fff;
  opacity: 0.3;
  border-top-left-radius: 100%;
  position: absolute;
  top: 50px;
  left: 130px;
`;

const TopCircle = styled.div`
  height: 78px;
  width: 85px;
  background-color: #fff;
  opacity: 0.3;
  border-bottom-left-radius: 100%;
  position: absolute;
  bottom: 80px;
  left: 165px;
`;

const StyledKPIsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 1.5rem 0px;
`;

const StyledKPICard = styled.div`
  border-radius: 2%;
  width: 250px;
  min-height: 125px;
  padding: 20px;
  color: #fff;
  position: relative;

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
