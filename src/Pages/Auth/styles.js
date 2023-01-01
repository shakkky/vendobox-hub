import React from 'react';
import styled from 'styled-components';
import { SectionFormInput as SFI } from 'Components/Section';
import Icon from 'Components/Icon';
export { Container, Row, Col } from 'reactstrap';

const Wrapper = styled.div`
  width: 980px;
  margin: auto;

  height: 100vh;
  display: flex;
  align-items: center;

  @media (max-width: 576px) {
    max-width: 420px;
  }
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;

  padding: 24px;

  border-radius: 12px;

  background: white;
  box-shadow: -4px -4px 100px 10px rgba(0, 0, 0, 0.075);
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

const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 40px;
`;

const ButtonWrapper = styled.div`
  margin-top: 27px;
  display: flex;

  ${({ theme }) =>
    theme.media.phone(`
      margin-top: 7px;

      button {
        width: 100%;
      }
  `)};
`;

const Error = styled.div`
  font-size: 18px;
  color: ${props => props.theme.colors.thunderbird};
`;

const SignUp = styled.div`
  margin-top: 74px;
  color: ${props => props.theme.colors.darkerBlue};
  font-size: 18px;
  padding-right: 2rem;

  ${({ theme }) =>
    theme.media.phone(`
      margin-top: 20px;
  `)} & > a {
    margin-left: 5px;
  }
`;

const SectionFormInput = props => <SFI width={360} {...props} />;

const Logo = () => <Icon type="logo" width={295} height={300} />;

const CompanyTitle = styled.div`
  color: ${props => props.color ?? props.theme.colors.jade};
  font-size: 3rem;
  margin-right: 0.5ch;
  font-weight: 600;
`;

const CompanyTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const PanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export { default as InputAdornment } from '@material-ui/core/InputAdornment';
export { Input } from 'Components/Form';
export { default as Button } from 'Components/Button';
export {
  Logo,
  SectionFormInput,
  Wrapper,
  FormWrapper,
  Title,
  ButtonWrapper,
  Error,
  SignUp,
  Icon,
  CompanyTitle,
  CompanyTitleWrapper,
  PanelWrapper,
};
