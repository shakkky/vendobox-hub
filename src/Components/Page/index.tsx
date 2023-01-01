import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const PageWrapper = ({
  children,
  title,
  descriptions,
  canonical,
  ...restProps
}: {
  children: React.ReactNode;
  title: string;
  descriptions?: string;
  canonical?: string;
}): JSX.Element => (
  <div className="page-wrapper" {...restProps}>
    <Helmet>
      <title>{title}</title>
      {descriptions && <meta name="description" content={descriptions} />}
      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
    {children}
  </div>
);

PageWrapper.propTypes = {
  title: PropTypes.string.isRequired,
};

PageWrapper.defaultProps = {
  description: null,
  canonical: null,
};

export { PageWrapper };
