import React from 'react';
import PropTypes from 'prop-types';

import moment, { Moment } from 'moment';

import { useHasErrorOrNotification } from 'app-context';
import { Indicator } from '../Loader';
import {
  ActionContainer,
  PageHeaderWrapper,
  SubHeading,
  SubHeadingWrapper,
  StatusWrapper,
  TitleWrapper,
  Children,
  ApplicationErrors,
  Row,
  Col,
} from './styles';

import GraphQLErrorWidget from '../../AppGraphQL/GraphQLErrorWidget';
import AppNotification from '../AppNotification';

const PageHeader = ({
  title,
  subHeading,
  subHeadingButton,
  pageLoading = false,
  lastSeenSubheading,
  action,
  status,
  children,
}: {
  title: string;
  pageLoading?: boolean;
  action?: React.ReactNode | string;
  children?: React.ReactNode | string;
  status?: React.ReactNode | string;
  lastSeenSubheading?: string | Date | Moment;
  headingNote?: React.ReactNode | string;
  subHeadingButton?: React.ReactNode | string;
  subHeading?: React.ReactNode | string;
  badges: {
    label: string;
    outline: boolean;
    color: string;
    tooltip: boolean;
  }[];
}): JSX.Element => (
  <PageHeaderWrapper>
    <Row>
      <Col xs="7" sm="8" md="9">
        <Row>
          <TitleWrapper>
            {title}
            {pageLoading && <Indicator size={0.5} />}
          </TitleWrapper>
        </Row>
      </Col>
      {action && (
        <Col xs="5" sm="4" md="3" className="text-right">
          <ActionContainer>{action}</ActionContainer>
        </Col>
      )}
    </Row>
    {subHeading && (
      <Row>
        <Col md="9">
          <SubHeading>
            <SubHeadingWrapper>
              {subHeading}
              {subHeadingButton ?? undefined}
            </SubHeadingWrapper>
          </SubHeading>
        </Col>
      </Row>
    )}
    {lastSeenSubheading && (
      <Row>
        <Col md="9">
          <SubHeading>
            <SubHeadingWrapper>
              Last logged in {moment(lastSeenSubheading).fromNow()}
            </SubHeadingWrapper>
          </SubHeading>
        </Col>
      </Row>
    )}
    <ApplicationErrorsWrapper>
      <ApplicationErrors>
        <GraphQLErrorWidget />
        <AppNotification />
      </ApplicationErrors>
    </ApplicationErrorsWrapper>
    {children && <Children>{children}</Children>}

    {status && <StatusWrapper>{status}</StatusWrapper>}
  </PageHeaderWrapper>
);

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subHeading: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  badges: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      outline: PropTypes.bool,
      color: PropTypes.string,
    })
  ),
  action: PropTypes.element,
  status: PropTypes.element,
};

PageHeader.defaultProps = {
  title: 'Page title',
  subHeading: null,
  badges: [],
  action: null,
  status: null,
};

export default PageHeader;

const ApplicationErrorsWrapper = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element | null => {
  const hasErrorOrNotification = useHasErrorOrNotification();
  if (!hasErrorOrNotification) return null;
  return <>{children}</>;
};
