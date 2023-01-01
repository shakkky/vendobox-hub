import styled from 'styled-components';
import DateTimePicker from 'react-datetime-picker';

export const DateAndTimeInputWrapper = styled(DateTimePicker)`
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
    content: ${props =>
      props.error ? `'${props.errorMessage || props.error}'` : `''`};
    position: absolute;
    bottom: -26px;
    border: 0 !important;
    left: 0;
    color: ${props => props.theme.colors.thunderbird};
    font-size: 15px;
  }

  .react-datetime-picker__wrapper {
    width: 100%;
    border: none;
  }
`;
