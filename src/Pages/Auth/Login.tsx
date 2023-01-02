import { useCallback, useMemo } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useMutation, ApolloError } from '@apollo/client';
import { useFormik } from 'formik';
import * as yup from 'yup';
import qs from 'qs';

import config from 'config';
import { useNotification } from 'HOC';
import { formatErrors } from 'AppGraphQL';

import { Icon, Button } from 'Components';
import { Input } from 'Components/Form';
import { SectionFormInput } from 'Components/Section';

import InputAdornment from '@material-ui/core/InputAdornment';
import { Grid } from '@mui/material';

import {
  PageWrapper,
  ButtonWrapper,
  Error,
  Header,
  ExtraLargeText,
  LargeText,
  FormWrapper,
  PanelWrapper,
  StyledLoader,
} from './styles';

import { login, loginVariables } from 'schema/login';
import { LOGIN_MUTATION } from './queries';

const isDev = config.stage === 'development';

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
    validationSchema: yup.object().shape({
      email: yup.string().trim().email().required('Email is required'),
      password: yup.string().required('Password field is required'),
    }),
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
    <PageWrapper>
      <Grid container direction="row" spacing={2} columns={10}>
        <Grid item xs={10} sm={10} md={5}>
          <PanelWrapper>
            <Header>
              <ExtraLargeText>vendobox</ExtraLargeText>
              <ExtraLargeText color="#4a4a4a"> hub</ExtraLargeText>
            </Header>
            <LargeText>the home of all things vendobox</LargeText>
          </PanelWrapper>
        </Grid>
        <Grid item xs={10} sm={10} md={5}>
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
        </Grid>
      </Grid>
    </PageWrapper>
  );
};

export default Login;
