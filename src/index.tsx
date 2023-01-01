import 'isomorphic-unfetch';
import 'abortcontroller-polyfill/dist/polyfill-patch-fetch';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { ApolloError, ApolloProvider } from '@apollo/client';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

import { AppContextProvider, Context } from 'app-context';
import client from './AppGraphQL/apollo';
import Routes from './Routes';

import { ThemedApp } from './styles';
import {
  compareArrayPropConstructor,
  compareArrayItemShallowConstructor,
} from './Utils/compare';

type IndexProps = Record<string, never>;
type IndexState = Pick<
  Context,
  'apiErrors' | 'notificationMessages' | 'pageAlertMessages'
>;

class ApplicationContext extends Component<IndexProps, IndexState> {
  constructor(props: IndexProps) {
    super(props);

    this.state = {
      apiErrors: null,
      notificationMessages: [],
      pageAlertMessages: [],
    };
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  shouldComponentUpdate(_: unknown, nextState: IndexState) {
    const arrayCompare = compareArrayPropConstructor(this.state, nextState);
    const compareShallow = compareArrayItemShallowConstructor(
      this.state,
      nextState
    );
    const shouldUpdate =
      arrayCompare('notificationMessages') ||
      compareShallow('pageAlertMessages') ||
      nextState?.apiErrors !== this.state?.apiErrors;
    return shouldUpdate;
  }

  clearPageAlert = () => this.setState({ pageAlertMessages: [] });
  sendPageAlert = (message: string, type = 'success') => {
    const existingMessage = this.state.pageAlertMessages.find(
      msg => msg.message === message && msg.type === type
    );
    if (existingMessage) return;
    this.setState(state => ({
      ...state,
      pageAlertMessages: [...state.pageAlertMessages, { message, type }],
    }));
  };

  setApiError = (e: ApolloError) => this.setState({ apiErrors: e });
  resetApiError = () => this.setState({ apiErrors: null });

  setNotificationMessage = (message: string, timeoutSeconds = 4) => {
    if (this.state.notificationMessages.includes(message)) return;
    this.setState(
      state => ({
        ...state,
        notificationMessages: [...state.notificationMessages, message],
      }),
      () => {
        setTimeout(() => {
          this.setState({ notificationMessages: [] });
        }, timeoutSeconds * 1000);
      }
    );
  };

  render() {
    return (
      <ApolloProvider client={client}>
        <MuiPickersUtilsProvider locale="UTC" utils={MomentUtils}>
          <ThemedApp>
            <AppContextProvider
              setApiError={this.setApiError.bind(this)}
              resetApiError={this.resetApiError.bind(this)}
              setNotificationMessage={this.setNotificationMessage.bind(this)}
              sendPageAlert={this.sendPageAlert.bind(this)}
              clearPageAlert={this.clearPageAlert.bind(this)}
              apiErrors={this.state.apiErrors}
              notificationMessages={this.state.notificationMessages}
              pageAlertMessages={this.state.pageAlertMessages}
            >
              <Routes />
            </AppContextProvider>
          </ThemedApp>
        </MuiPickersUtilsProvider>
      </ApolloProvider>
    );
  }
}

ReactDOM.render(<ApplicationContext />, document.getElementById('root'));
