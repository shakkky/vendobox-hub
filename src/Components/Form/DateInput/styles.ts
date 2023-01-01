import styled from 'styled-components';
import DatePicker from 'react-date-picker';
import moment, { Moment } from 'moment';
export { DateAndTimeInputWrapper } from './DateTimeWrapper';

export const DateInputWrapper = styled(DatePicker)<{
  error?: string;
  value: Maybe<Moment | Date | string>;
}>`
  margin-bottom: 14px;
  background: ${props => props.theme.colors.alabaster};
  width: 100%;

  border: 1px solid
    ${props => (props.error ? props.theme.colors.thunderbird : 'transparent')} !important;
  height: 52px;
  border-radius: 4px;
  & > div > input {
    padding: 18px 10px;
  }
  & > div::before {
    border-bottom: 0 !important;
  }
  & > div:hover::before,
  & > div:hover::after {
    border-bottom: 0 !important;
  }
  &::after {
    content: '${({ error }) => error ?? ''}';
    position: absolute;
    bottom: -26px;
    border: 0 !important;
    left: 0;
    color: ${props => props.theme.colors.thunderbird};
    font-size: 15px;
  }
  .react-date-picker__wrapper {
    width: 100%;
    border: none;
  }
  .react-date-picker__inputGroup__day {
    width: ${({ value }) =>
      (moment(value).date() + 1).toString().length > 1 ? 18 : 9}px !important;
    outline: none;
  }
  .react-date-picker__inputGroup__month {
    width: ${({ value }) =>
      (moment(value).month() + 1).toString().length > 1 ? 18 : 9}px !important;
    outline: none;
  }
  .react-date-picker__inputGroup__year {
    width: 35px !important;
    outline: none;
  }
`;

export const FieldLabel = styled.span`
  color: ${props => props.theme.colors.darkPurple};
  font-size: 14px;
  margin-bottom: 0;
`;
export const FieldRequired = styled.span`
  color: ${props => props.theme.colors.persian};
`;
