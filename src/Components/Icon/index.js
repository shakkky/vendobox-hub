/*
  Try to keep icon list in alphabetical order when adding your icons
*/
import React from 'react';
import {
  Add,
  ArrowBack,
  ArrowDropDown,
  ArrowForward,
  Attachment as AttachFile,
  Cancel,
  Clear,
  Close,
  ContactPhone,
  DeleteOutline,
  Description,
  Done,
  Email,
  Edit as EditMui,
  Equalizer,
  FileCopy,
  Group,
  HighlightOff,
  History,
  Home,
  Info,
  LibraryBooks,
  LockOutlined,
  Menu,
  NotificationsActive,
  NotInterested,
  OpenInNew,
  PermIdentity,
  Person,
  PersonAddOutlined,
  Phone,
  PhotoCamera,
  PlayCircleFilled,
  PlaylistAdd,
  Settings,
  Update,
  Visibility,
  WarningRounded,
} from '@material-ui/icons';

import { CircularProgress } from '@material-ui/core';

import { Agents, Arrow, Edit, Upload, Logo } from './CustomIcon';

const Icon = ({ type, ...rest }) => {
  switch (type) {
    case 'agents':
      return <Agents {...rest} />;

    case 'arrow-back':
      return <ArrowBack {...rest} />;

    case 'arrow-down':
      return <Arrow {...rest} type="down" />;

    case 'arrow-drop-down':
      return <ArrowDropDown {...rest} />;

    case 'arrow-forward':
      return <ArrowForward {...rest} />;

    case 'arrow-flat':
      return <Arrow {...rest} type="flat" />;

    case 'arrow-up':
      return <Arrow {...rest} type="up" />;

    case 'close':
      return <Close {...rest} />;

    case 'cancel':
      return <Cancel {...rest} />;

    case 'cog':
      return <Settings {...rest} />;

    case 'bust':
      return <PermIdentity {...rest} />;

    case 'double-bust':
      return <Group {...rest} />;

    case 'file-copy':
      return <FileCopy {...rest} />;

    case 'lock':
      return <LockOutlined {...rest} />;

    case 'menu':
      return <Menu {...rest} />;

    case 'tick':
      return <Done {...rest} />;

    case 'user':
      return <Person {...rest} />;

    case 'user-add-outline':
      return <PersonAddOutlined {...rest} />;

    case 'eye':
      return <Visibility {...rest} />;

    case 'books':
      return <LibraryBooks {...rest} />;

    case 'contact-phone':
      return <ContactPhone {...rest} />;

    case 'edit':
      return <Edit {...rest} />;

    case 'edit-mui':
      return <EditMui {...rest} />;

    case 'openInNew':
      return <OpenInNew {...rest} />;

    case 'delete':
      return <DeleteOutline {...rest} />;

    case 'history':
      return <History {...rest} />;

    case 'play-circle':
      return <PlayCircleFilled {...rest} />;

    case 'list-add':
      return <PlaylistAdd {...rest} />;

    case 'upload':
      return <Upload {...rest} />;

    case 'clear':
      return <Clear {...rest} />;

    case 'add':
      return <Add {...rest} />;

    case 'email':
      return <Email {...rest} />;

    case 'info':
      return <Info {...rest} />;

    case 'logo':
      return <Logo {...rest} />;

    case 'home':
      return <Home {...rest} />;

    case 'highlight-off':
      return <HighlightOff {...rest} />;

    case 'notifications':
      return <NotificationsActive {...rest} />;

    case 'equalizer':
      return <Equalizer {...rest} />;

    case 'circular-loader':
      return <CircularProgress {...rest} />;

    case 'warning':
      return <WarningRounded {...rest} />;

    case 'update':
      return <Update {...rest} />;

    case 'photo':
      return <PhotoCamera {...rest} />;

    case 'phone':
      return <Phone {...rest} />;

    case 'report':
      return <Description {...rest} />;

    case 'attach':
      return <AttachFile {...rest} />;

    case 'disabled':
      return <NotInterested {...rest} />;

    default:
      return null;
  }
};

export default Icon;
