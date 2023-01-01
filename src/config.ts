const config = {
  api: process.env.REACT_APP_API ?? 'https://api.vendobox.local/graphql',
  stage: process.env.REACT_APP_STAGE ?? 'development',
  revision: process.env.REACT_APP_REVISION ?? '0000',
  website: process.env.REACT_APP_WEBSITE_DOMAIN ?? 'http://localhost:3000',
  version: '0.0.1',
  query: {
    limit: 20,
    sectionLimit: 5,
  },
  timezone: {
    default: 'Australia/NSW',
  },
  aws: {
    s3: {
      url: 'https://vendobox-documents.s3-ap-southeast-2.amazonaws.com',
    },
  },
};

export default config;
