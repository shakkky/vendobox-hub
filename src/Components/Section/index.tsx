import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import StatusBadge from '../StatusBadge';
import {
  Wrapper,
  AlertWrapper,
  Title,
  Subtitle,
  BadgeWrapper,
  HeaderWrapper,
  TitleWrapper,
  SubtitleWrapper,
  Skeleton,
  StyledIconButton,
  ExpandMoreIcon,
} from './styles';

const Section = ({
  fullHeight = false,
  title,
  subtitle,
  details,
  warning,
  closeAlert,
  errorAlert,
  successAlert,
  badges = [],
  children,
  loading,
  collapsed: collapsedDefault,
  showCollapse,
  transparent,
  ...rest
}: {
  title: string;
  loading?: boolean;
  children: React.ReactNode;
  collapsed?: boolean;
  fullHeight?: boolean;
  showCollapse?: boolean;
  subtitle?: string;
  badges: { label: string; outline: boolean; color: string }[];
  errorAlert?: string | React.ReactNode;
  closeAlert?: () => void;
  successAlert?: string | React.ReactNode;
  warning?: string | React.ReactNode;
  details?: string | React.ReactNode;
  transparent?: boolean;
}): JSX.Element => {
  const [collapsed, setCollapsed] = useState(collapsedDefault);
  const reverseCollapsed = useCallback(() => setCollapsed(val => !val), []);
  return (
    <Wrapper
      {...rest}
      collapsed={collapsed}
      className="section"
      fullHeight={fullHeight}
      transparent={transparent}
    >
      {errorAlert && (
        <AlertWrapper onClick={closeAlert} isError>
          {errorAlert}
        </AlertWrapper>
      )}
      {successAlert && (
        <AlertWrapper onClick={closeAlert} isError={false}>
          {successAlert}
        </AlertWrapper>
      )}
      <HeaderWrapper>
        <TitleWrapper>
          {title && !loading && (
            <Title className="section-title" subtitle={!!subtitle}>
              {title}
              {showCollapse && (
                <StyledIconButton
                  onClick={reverseCollapsed}
                  size="small"
                  disableRipple
                  color="primary"
                >
                  <ExpandMoreIcon collapsed={collapsed} />
                </StyledIconButton>
              )}
              {details && details}
            </Title>
          )}
          {loading && <Skeleton />}
        </TitleWrapper>
        {badges && (
          <BadgeWrapper>
            {badges.map(({ label, ...badge }) => (
              <StatusBadge key={label} label={label} {...badge} />
            ))}
          </BadgeWrapper>
        )}
        {warning && warning}
      </HeaderWrapper>
      {subtitle && (
        <HeaderWrapper>
          <SubtitleWrapper>
            <Subtitle className="section-title">{subtitle}</Subtitle>
          </SubtitleWrapper>
        </HeaderWrapper>
      )}
      {!collapsed && children}
    </Wrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  badges: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      outline: PropTypes.bool,
      color: PropTypes.string,
    })
  ),
  border: PropTypes.bool,
  formSection: PropTypes.bool,
  fullHeight: PropTypes.bool,
  showCollapse: PropTypes.bool,
  collapsed: PropTypes.bool,
};

Section.defaultProps = {
  title: null,
  subtitle: null,
  badges: null,
  border: true,
  formSection: false,
  showCollapse: false,
  collapsed: false,
};

export default Section;

export { default as SectionActions } from './SectionActions';
export { default as SectionContainer } from './SectionContainer';
export { default as SectionItem } from './SectionItem';
export { default as SectionFilters } from './SectionFilters';
export { default as SectionFilter } from './SectionFilter';
export { default as SectionFormInput } from './SectionFormInput';
export { default as SectionParagraph } from './SectionParagraph';
