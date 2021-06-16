import React, { FC } from 'react';
import styled from 'styled-components';

import { Company, DropdownItem, SortEnum } from '../../graphql/types';
import { Spinner } from '../../shared/layout';
import { GlobalStyleType } from '../../shared/theme';

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
  color: ${({ theme }: GlobalStyleType) => theme?.body};
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
  key?: string;
  showCritical?: boolean;
  theme?: { table: string; toggleFontColor: string };
};

const StyledTableRow = styled.tr`
  border: 1px solid #ddd;
  padding: 0.35em;

  color: ${(props: StyledTableRowpropsType) => props?.theme?.toggleFontColor};

  background-color: ${(props: StyledTableRowpropsType) =>
    props.showCritical ? '#ff6d84' : props?.theme?.table};

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

export const sortCompanies = (companies: Company[], key: string) => {
  switch (key) {
    case SortEnum.ID:
      return [...companies].sort((a, b) => a.id.localeCompare(b.id));
    case SortEnum.COMPANY_NAME:
      return [...companies].sort((a, b) => a.name.localeCompare(b.name));
    case SortEnum.SEGMENT:
      return [...companies].sort((a, b) => a.segment.localeCompare(b.segment));
    case SortEnum.CONTRACT:
      return [...companies].sort((a, b) =>
        a.contract.localeCompare(b.contract)
      );
    case SortEnum.RENEWALS:
      return [...companies].sort((a, b) => b.renewals - a.renewals);
    case SortEnum.BEST_NPS_AVG:
      return [...companies].sort((a, b) => a.nps.avg - b.nps.avg);
    case SortEnum.WORSE_NPS_AVG:
      return [...companies].sort((a, b) => a.nps.lastPeriod - b.nps.lastPeriod);
    default:
      return companies;
  }
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
          sortCompanies(companies, sortState.value).map(
            ({
              id,
              name,
              segment,
              contract,
              renewals,
              isCritical,
              nps: { currentPeriod, lastPeriod, avg },
            }) => (
              <StyledTableRow
                showCritical={showCritical && isCritical}
                key={id}
              >
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
