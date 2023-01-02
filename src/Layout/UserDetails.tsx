import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import Icon from '../Components/Icon';

import Avatar from 'Components/Avatar';

function UserDetails({
  userFirstName,
  userLastName,
  userPhoto,
  userRole,
  handleLogout,
}: {
  userFirstName: Maybe<string>;
  userLastName: Maybe<string>;
  userPhoto?: Maybe<string>;
  userRole?: Maybe<string>;
  handleLogout?: () => void;
}) {
  const { push } = useHistory();
  if (!userFirstName) return <></>;
  return (
    <Wrapper>
      <Avatar
        firstName={userFirstName}
        lastName={userLastName}
        photo={userPhoto}
        size={56}
        push={push}
      />
      <UserName>
        {userFirstName} {userLastName}
      </UserName>
      <UserRole>{userRole}</UserRole>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleLogout}
      >
        <Icon type="logout" />
      </IconButton>
    </Wrapper>
  );
}

export default React.memo(UserDetails);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 18px;
  margin-bottom: 12px;
`;

const UserName = styled.h6`
  font-weight: 600;
  color: ${p => p.theme.colors.offBlack};
  margin: 12px 0 6px 0px;
`;

const UserRole = styled.div`
  font-weight: 600;
  color: ${p => p.theme.colors.regentGrey};
  font-size: 12px;
`;
