import styled from 'styled-components';
import { Checkbox } from '@material-ui/core';
import UnstyledSkeleton from 'react-loading-skeleton';

const Field = styled(Checkbox)`
  background-color: transparent;
  padding: 6px;
  ${({ noMinHeight = false }) =>
    noMinHeight ? '' : `height: unset !important;`};
  ${({ disabled }) =>
    disabled &&
    `svg {
      color: rgba(0, 0, 0, 0.26) !important;
    }`};
`;

const Skeleton = styled(UnstyledSkeleton)`
  height: 20px;
  width: 20px;
  margin-right: 15px;
  margin-left: 16px;
  border-radius: 2px;
`;

const Wrapper = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  margin-left: ${({ disableMargin = false }) =>
    disableMargin ? 'inherit' : '-2px'};

  margin-bottom: ${({ noMarginBottom = false }) =>
    noMarginBottom ? '0 ' : '10px'};

  & > span {
    align-items: center;
  }
  & > span > span > input {
    width: 30px;
    left: 5px;
    & > svg {
      color: ${props => (props.error ? props.theme.colors.thunderbird : '')};
    }
  }
`;

const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.div`
  color: ${props =>
    props.checked
      ? props.theme.colors.darkPurple
      : props.theme.colors.darkerBlue};
  margin-left: -4px;
  text-align: left;
  ${({ disabled }) => disabled && `color: gray !important;`};
`;

const SubLabel = styled.div`
  color: ${props =>
    props.checked
      ? props.theme.colors.darkPurple
      : props.theme.colors.darkerBlue};
  margin-left: -4px;
  font-size: 11px;
  text-align: left;
`;

export { Field, Label, SubLabel, Wrapper, SubWrapper, Skeleton };
