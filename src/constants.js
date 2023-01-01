const MAX_FILE_UPLOAD_SIZE = 20000000; // 20mb
const FILE_UPLOAD_SIZE_10MB = 10000000; // 10mb
const MAX_IMAGE_SIZE_10MB = 15000000; // 15mb

const USER_TYPES = {
  ADMIN: 'ADMIN',
  OPERATOR: 'OP',
};

const USER_TYPE_TITLES = {
  ADMIN: 'Admin',
  OP: 'Operator',
};

const USER_TYPE_LABEL = {
  ADMIN: 'Admin',
  OP: 'Operator',
};

const UserStatus = {
  ACTIVE: 10,
  DEACTIVATED: 20,
};

/** Timezones - Moment zone names */
const StateTimezones = {
  ACT: 'Australia/ACT',
  NSW: 'Australia/NSW',
  NT: 'Australia/North',
  QLD: 'Australia/Queensland',
  SA: 'Australia/South',
  TAS: 'Australia/Tasmania',
  VIC: 'Australia/Victoria',
  WA: 'Australia/West',
};

const S3ACL = {
  PRIVATE: 'private',
  PUBLIC: 'public-read',
};

export {
  S3ACL,
  USER_TYPES,
  USER_TYPE_TITLES,
  USER_TYPE_LABEL,
  UserStatus,
  StateTimezones,
  MAX_FILE_UPLOAD_SIZE,
  FILE_UPLOAD_SIZE_10MB,
  MAX_IMAGE_SIZE_10MB,
};
