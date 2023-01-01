import { useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { useLocation, useHistory } from 'react-router-dom';
import { gql, useMutation, ApolloError } from '@apollo/client';
import { useFormik } from 'formik';
import * as yup from 'yup';
import qs from 'qs';

import config from 'config';
import { useNotification } from 'HOC';
import { formatErrors } from 'AppGraphQL';
import { Indicator as Loader } from 'Components';
import {
  InputAdornment,
  SectionFormInput,
  Wrapper,
  ButtonWrapper,
  Error,
  Title,
  FormWrapper,
  Icon,
  Input,
  Button,
  Container,
  Row,
  Col,
  CompanyTitle,
  CompanyTitleWrapper,
  PanelWrapper,
} from './styles';
import { login, loginVariables } from 'schema/login';

const validationSchema = yup.object().shape({
  email: yup.string().trim().email().required('Email is required'),
  password: yup.string().required('Password field is required'),
});

const isDev = config.stage === 'development';
const LOGIN_MUTATION = gql`
  mutation login($credentials: CredentialsInput!) {
    authUser: login(credentials: $credentials) {
      id
      first_name
      last_name
      email
      role {
        code
        label
      }
      photo
      phone
      created_at
      updated_at
      apiToken
    }
  }
`;

const Login = () => {
  const location = useLocation();
  const history = useHistory();
  const {
    sendPageAlert,
    pageAlertMessages,
    clearPageAlert,
  } = useNotification();
  const initialValues = useMemo(() => {
    const params = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });

    const { email, redirectTo } = params as Record<string, string>;

    return {
      email: isDev ? email ?? 'demo-admin@mailinator.com' : email ?? '',
      password: '',
      redirectTo,
    };
  }, [location.search]);
  const formatError = useCallback(
    (error: ApolloError) => {
      sendPageAlert(formatErrors(null, error), 'error');
    },
    [sendPageAlert]
  );
  const [mutate, { loading: submitting }] = useMutation<login, loginVariables>(
    LOGIN_MUTATION,
    {
      onError: formatError,
    }
  );
  const errMsg = pageAlertMessages?.[0]?.message ?? '';
  const { values, errors, handleSubmit, setFieldValue } = useFormik({
    initialValues,
    validateOnChange: false,
    validationSchema,
    onSubmit: async (vals, { setStatus }) => {
      clearPageAlert();
      const { data, errors } = await mutate({
        variables: {
          credentials: {
            email: vals.email.trim(),
            password: vals.password,
          },
        },
      });
      const { authUser } = data ?? {};
      if (authUser && authUser.id) {
        localStorage.setItem('user', JSON.stringify(authUser));
        if (values.redirectTo) {
          history.push(decodeURIComponent(values.redirectTo));
        } else {
          history.push('/');
        }
        return;
      }

      if (errors) {
        setFieldValue(
          'global_error',
          sendPageAlert(formatErrors(null, errors), 'error')
        );
        setStatus('error');
        return;
      }
      localStorage.removeItem('user');
      setFieldValue('global_error', 'We could not find this account');
      setStatus('error');
    },
  });
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <PanelWrapper>
              <CompanyTitleWrapper>
                <CompanyTitle>vendobox</CompanyTitle>
                <CompanyTitle color="#4a4a4a"> hub</CompanyTitle>
              </CompanyTitleWrapper>
              <Title>the home of all things vendobox</Title>
            </PanelWrapper>
          </Col>
          <Col sm={12} md={6}>
            <FormWrapper>
              <SectionFormInput>
                <Input
                  border="#dfe2e5"
                  type="text"
                  id="username"
                  placeholder="Email Address"
                  onChange={e => setFieldValue('email', e.target.value)}
                  value={values.email}
                  error={!!errors.email}
                  errorMessage={errors.email}
                  startAdornment={
                    <InputAdornment position="start">
                      <Icon type="user" color="primary" />
                    </InputAdornment>
                  }
                />
              </SectionFormInput>
              <SectionFormInput>
                <Input
                  border="#dfe2e5"
                  name="password"
                  id="password"
                  type="password"
                  placeholder="Password"
                  onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                  onChange={e => setFieldValue('password', e.target.value)}
                  value={values.password}
                  error={!!errors.password}
                  errorMessage={errors.password}
                  startAdornment={
                    <InputAdornment position="start">
                      <Icon type="lock" color="primary" />
                    </InputAdornment>
                  }
                />
              </SectionFormInput>
              {errMsg && <Error>{errMsg}</Error>}
              <ButtonWrapper>
                <Button
                  label="Log In"
                  disabled={submitting}
                  onClick={handleSubmit}
                />
                {submitting && <StyledLoader size={0.75} />}
              </ButtonWrapper>
            </FormWrapper>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Login;

const StyledLoader = styled(Loader)`
  margin-left: 8px;
  height: 38px;
`;
