import React, { Dispatch, SetStateAction, FC } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  margin-left: auto;
  margin-right: 4rem;
  display: flex;
  align-items: center;
  color: #6e6e6e;
`;

type ShowCriticalPropsType = {
  setState: Dispatch<SetStateAction<boolean>>;
};

export const ShowCritical: FC<ShowCriticalPropsType> = ({ setState }) => {
  return (
    <StyledContainer>
      <input
        type="checkbox"
        onChange={() => setState((showCritical) => !showCritical)}
      />
      <label htmlFor="critical-checkbox">Show critical</label>
    </StyledContainer>
  );
};
