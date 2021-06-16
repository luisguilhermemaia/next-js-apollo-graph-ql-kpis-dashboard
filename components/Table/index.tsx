import React, { FC } from 'react';
import styled from 'styled-components';

import { Company, DropdownItem } from '../../graphql/types';
import { Spinner } from '../Spinner';

const maxWidthBreakpoint = '992px';

const StyledTableBody = styled.tbody``;

const StyledDot = styled.span`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  display: inline-block;
  background-color: ${(props) => (props.color ? props.color : '#bbb')};
`;

const StyledTableHead = styled.thead`
  @media screen and (max-width: ${maxWidthBreakpoint}) {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    visibility: visible;
  }
`;

const StyledTable = styled.table`
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 1.5rem 0;
  padding: 1rem 0;
  width: 100%;
  table-layout: fixed;
  @media screen and (max-width: ${maxWidthBreakpoint}) {
    border: 0;
  }
`;

type StyledTableRowpropsType = {
  showCritical?: boolean;
};

const StyledTableRow = styled.tr`
  border: 1px solid #ddd;
  padding: 0.35em;

  background-color: ${(props: StyledTableRowpropsType) =>
    props.showCritical ? '#FEE5E9' : '#FFFFFF'};

  @media screen and (max-width: ${maxWidthBreakpoint}) {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: 0.625em;
  }
`;

const StyledTableHeader = styled.th`
  padding: 0.625em;
  text-align: center;
  font-size: 0.85em;
  letter-spacing: 0.1em;
`;

const StyledTableCell = styled.td`
  padding: 0.625em;
  text-align: center;
  font-size: 0.85em;
  letter-spacing: 0.1em;
  text-transform: capitalize;

  @media screen and (max-width: ${maxWidthBreakpoint}) {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: 0.8em;
    text-align: right;

    &:before {
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: capitalize;
    }

    &:last-child {
      border-bottom: 0;
    }
  }
`;

const labels = {
  ID: 'Id',
  NAME: 'Company name',
  SEGMENT: 'Segment',
  CONTRACT: 'Contract',
  RENEWALS: 'RENEWALS',
  NPS_AVG: 'NPS avg',
  NPS_LAST: 'NPS last',
  NPS_FIRST: 'NPS First',
};

type TablePropsType = {
  loading: boolean;
  showCritical: boolean;
  companies: Company[] | undefined;
  sortState: DropdownItem;
};

export const Table: FC<TablePropsType> = ({
  loading,
  companies = [],
  sortState,
  showCritical,
}) => {
  return (
    <StyledTable>
      <StyledTableHead>
        <StyledTableRow>
          <StyledTableHeader>{labels.ID}</StyledTableHeader>
          <StyledTableHeader>{labels.NAME}</StyledTableHeader>
          <StyledTableHeader>{labels.SEGMENT}</StyledTableHeader>
          <StyledTableHeader>{labels.CONTRACT}</StyledTableHeader>
          <StyledTableHeader>{labels.RENEWALS}</StyledTableHeader>
          <StyledTableHeader>{labels.NPS_AVG}</StyledTableHeader>
          <StyledTableHeader>{labels.NPS_LAST}</StyledTableHeader>
          <StyledTableHeader>{labels.NPS_FIRST}</StyledTableHeader>
        </StyledTableRow>
      </StyledTableHead>
      <StyledTableBody>
        {loading ? (
          <Spinner />
        ) : (
          companies
            ?.slice()
            .sort((a, b) => (a[sortState.value] > b[sortState.value] ? 1 : -1))
            .map(
              ({
                id,
                name,
                segment,
                contract,
                renewals,
                isCritical,
                nps: { currentPeriod, lastPeriod, avg },
              }) => (
                <StyledTableRow showCritical={showCritical && isCritical} key={id}>
                  <StyledTableCell data-label={labels.ID}>
                    <StyledDot color={id} />
                  </StyledTableCell>
                  <StyledTableCell data-label={labels.NAME}>
                    {name}
                  </StyledTableCell>
                  <StyledTableCell data-label={labels.SEGMENT}>
                    {segment}
                  </StyledTableCell>
                  <StyledTableCell data-label={labels.CONTRACT}>
                    {contract}
                  </StyledTableCell>
                  <StyledTableCell data-label={labels.RENEWALS}>
                    {renewals}
                  </StyledTableCell>
                  <StyledTableCell data-label={labels.NPS_AVG}>
                    {avg}
                  </StyledTableCell>
                  <StyledTableCell data-label={labels.NPS_LAST}>
                    {lastPeriod}
                  </StyledTableCell>
                  <StyledTableCell data-label={labels.NPS_FIRST}>
                    {currentPeriod}
                  </StyledTableCell>
                </StyledTableRow>
              )
            )
        )}
      </StyledTableBody>
    </StyledTable>
  );
};
