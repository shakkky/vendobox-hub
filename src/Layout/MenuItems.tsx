import React, { Fragment, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { MenuList } from '@material-ui/core';

import {
  DrawerWrapper,
  LogoWrapper,
  LogoCopy,
  DrawerMenuContent,
  StyledMenuItem,
} from './style';
import Icon from '../Components/Icon';

import UserDetails from './UserDetails';

import items, { MenuItem } from './menus';
import { login_authUser } from 'schema/login';

const TABLET_WIDTH = 959;

const handleMenuClick = (callback: () => void) => () => {
  if (window.innerWidth <= TABLET_WIDTH) {
    callback.call(null);
  }
};

function FullMenuItem({
  menuItem,
  menuItemClick,
  selected,
}: {
  menuItem: MenuItem;
  selected?: boolean;
  menuItemClick: (item: MenuItem, e: React.MouseEvent<SVGElement>) => void;
}) {
  const onClick = useCallback(e => menuItemClick(menuItem, e), [
    menuItem,
    menuItemClick,
  ]);
  return (
    <StyledMenuItem
      onClick={onClick}
      component={menuItem.link ? Link : undefined}
      to={menuItem.link}
      selected={selected}
    >
      <Icon type={menuItem.icon} />
      {menuItem.label}
    </StyledMenuItem>
  );
}

const MenuItems = ({
  toolbarClass,
  pathname,
  handleItemClick,
  handleLogout,
  userSession,
}: {
  toolbarClass?: string;
  pathname?: string;
  handleItemClick?: () => void;
  handleLogout?: () => void;
  userSession: Maybe<login_authUser>;
}) => {
  const isSelected = useCallback(menuItem => pathname === menuItem.link, [
    pathname,
  ]);
  const menuItemClick = useCallback(
    (menuItem, e) => {
      if (!isSelected(menuItem) && handleItemClick) {
        handleMenuClick(handleItemClick);
      }
    },
    [handleItemClick, isSelected]
  );
  return (
    <DrawerWrapper>
      <div>
        <LogoWrapper className={toolbarClass}>
          <Icon type="logo" size="md" />
          <LogoCopy>vendobox</LogoCopy>
        </LogoWrapper>
        <MenuList>
          <DrawerMenuContent>
            {items.map((menuItem, k) => (
              <Fragment key={k}>
                <FullMenuItem
                  key={k}
                  menuItem={menuItem}
                  menuItemClick={menuItemClick}
                  selected={isSelected(menuItem)}
                />
              </Fragment>
            ))}
          </DrawerMenuContent>
        </MenuList>
      </div>

      <UserDetails
        userFirstName={userSession?.first_name}
        userLastName={userSession?.last_name}
        userPhoto={userSession?.photo}
        userRole={userSession?.role?.label}
        handleLogout={handleLogout}
      />
    </DrawerWrapper>
  );
};

export default MenuItems;
