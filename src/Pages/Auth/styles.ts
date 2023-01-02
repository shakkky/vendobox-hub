import styled from 'styled-components';
import { Indicator } from 'Components';

// Containers

const PageWrapper = styled.div`
  width: 980px;
  margin: auto;

  height: 100vh;
  display: flex;
  align-items: center;

  @media (max-width: 576px) {
    width: 90vw;
  }
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  padding: 24px;
  width: 100%;

  border-radius: 12px;

  background: white;

  /* stylelint-disable-next-line alpha-value-notation */
  box-shadow: -4px -4px 100px 10px rgba(0, 0, 0, 0.1);

  .section-form-input {
    max-width: 100%;
  }

  @media (max-width: 576px) {
    padding: unset;
    box-shadow: none;
  }
`;

// ${({ theme }) =>
// theme.media.phone(`
// justify-content: flex-start;
// height: inherit;
// padding: 30px;

// .section-form-input {
//   max-width: 50px;
//   padding: 0;
// }
// `)};

const Header = styled.div`
  display: flex;
  flex-direction: row;
`;

const ButtonWrapper = styled.div`
  margin-top: 27px;
  display: flex;
`;

const PanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

// Copy

const ExtraLargeText = styled.div`
  color: ${props => props.color ?? props.theme.colors.jade};
  font-size: 3rem;
  margin-right: 0.5ch;
  font-weight: 600;
`;

const LargeText = styled.div`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 40px;
`;

const Error = styled.div`
  font-size: 18px;
  color: ${props => props.theme.colors.thunderbird};
`;

// Other components

const StyledLoader = styled(Indicator)`
  margin-left: 8px;
  height: 38px;
`;

export {
  PageWrapper,
  FormWrapper,
  Header,
  ExtraLargeText,
  LargeText,
  ButtonWrapper,
  Error,
  PanelWrapper,
  StyledLoader,
};
