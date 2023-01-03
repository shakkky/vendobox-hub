import styled, { css } from 'styled-components';
import {
  Table as MuiTable,
  TableHead as MuiTableHead,
  TableCell as MuiTableCell,
  TableRow as MuiTableRow,
  TableRowProps,
  TableCellProps,
} from '@material-ui/core';

const Action = styled.div`
  & > div > svg {
    color: ${props => props.theme.colors.persian} !important;
  }
  display: inline-flex;
`;

const ActionText = styled.div`
  margin-right: 24px !important;
  display: inline-flex;
`;

const ActionIcon = styled.div`
  margin-right: 24px !important;
  display: inline-flex;
  cursor: pointer;
`;

const ActionLabel = styled.div``;

const TableHead = styled(MuiTableHead)`
  & > th > * {
    font-size: 11px;
    margin-top: 10px;
    margin-bottom: 20px;
    color: ${props => props.theme.colors.regentGrey};
  }
  tr {
    background-color: transparent !important;
  }
  font-size: 11px;
  margin-top: 10px;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.regentGrey};
`;

type CellProps = {
  aligntop?: boolean;
  moreSpace?: boolean;
} & Partial<TableCellProps>;

const TableCell = styled(MuiTableCell)<CellProps>`
  vertical-align: ${props => (props.aligntop ? 'top' : 'middle')} !important;
  width: ${props => (props.moreSpace ? '25%' : 'inherit')};
  min-width: ${props => (props.moreSpace ? '200px' : 'inherit')};
`;

const NoteCell = styled(TableCell)`
  min-width: 150px;
  max-width: 250px;
`;

type RowProps = {
  compact?: boolean;
  strikeThrough?: boolean;
  flagged?: boolean;
  dimmed?: boolean;
} & Partial<TableRowProps>;

// &:nth-child(odd) {
//   background-color: ${props => props.theme.colors.alabaster};
// }

const TableRow = styled(MuiTableRow)<RowProps>`
  & > td {
    font-size: 14px;
    color: ${props => props.theme.colors.black};
  }

  height: ${p => (p.compact ? '20px' : '68px')} !important;
  max-height: ${p => (p.compact ? '20px' : '68px')} !important;

  border-bottom: 1px solid lightgrey;

  ${({ compact }) => {
    if (compact) {
      return css`
        td {
          padding: 15px 10px 15px 10px !important;
          min-height: 80px !important;
        }
      `;
    }
  }};

  ${({ strikeThrough = false }) =>
    strikeThrough &&
    css`
      text-decoration: line-through;
      opacity: 0.6;
    `}

  ${({ flagged, theme }) => {
    if (flagged) {
      return css`
        background-color: ${theme.colors.yellow} !important;
      `;
    }
  }};

  ${({ dimmed, theme }) => {
    if (dimmed) {
      return css`
        background-color: ${theme.colors.iron} !important;
      `;
    }
  }};
`;

const TableHeaderLabel = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  /* letter-spacing: 1px; */
`;

const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const Table = styled(MuiTable)`
  table-layout: auto;
  td:first-child,
  th:first-child {
    padding-left: 0 !important;
  }
`;

export {
  TableWrapper,
  Table,
  TableHead,
  TableHeaderLabel,
  TableRow,
  TableCell,
  Action,
  ActionIcon,
  ActionText,
  ActionLabel,
  NoteCell,
};
