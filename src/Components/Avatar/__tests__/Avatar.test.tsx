import React from 'react';
import Avatar from '..';
import { render } from '@testing-library/react';
import { ThemedApp } from '../../../styles';

const defaultProps = {
  firstName: 'Bob',
  lastName: 'Sacamano',
  role: { SUPERADMIN: 'Super Admin' },
  userRoleLabel: 'Super Admin',
  size: 0,
  push: () => {},
};

describe('<Avatar />', () => {
  it('Should correctly display the initials', () => {
    const { getByText } = render(
      <ThemedApp>
        <Avatar {...defaultProps} />
      </ThemedApp>
    );
    const avatar = getByText('BS');
    expect(avatar).toBeTruthy();
  });
});
