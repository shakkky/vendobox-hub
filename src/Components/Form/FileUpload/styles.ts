import styled, { css } from 'styled-components';
import { Input } from '@material-ui/core';

import Icon from '../../Icon';

export const InputHidden = styled(Input)`
  display: none;
  cursor: pointer;
`;

export const UploaderWrapper = styled.div`
  width: calc(100% - 16px);
  position: absolute;
  top: 8px;
  margin-left: 8px;
`;

export const Wrapper = styled.div<{
  error?: boolean;
  variant: 'filled' | 'standard';
}>`
  position: relative;
  border-radius: 3px;
  min-height: 50px;
  margin-bottom: 8px;
  background: ${({ theme, variant }) =>
    variant === 'standard' ? theme.colors.alabaster : '#e8e8e8'};
  ${({ variant }) =>
    variant === 'filled' &&
    css`
      border-bottom: 1px solid #878787;
    `}
  ${props =>
    props.error
      ? `border: 1px solid ${props.theme.colors.thunderbird}!important`
      : ``};
  /* & div {
    overflow: hidden;
  }
  & div button {
    display: flex;
    background: transparent;
    width: 100%;
    border: none;
  } */
  /* & div button span {
    width: 100%;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    top: 8px;
    position: relative;
  } */
  & input {
    position: absolute;
    left: 0;
    opacity: 0;
    max-width: 90px;
    width: 100%;
    cursor: pointer;
    /* padding: 5px 0 ; */
  }

  /* & > button,
  & > span {
    position: absolute;
    bottom: -28px;
    right: 0 ;
  }
  & div {
    position: absolute;
    width: 100%;
    top: 8px;
  } */
`;

export const UploadImage = styled.img`
  cursor: pointer;
`;

export const UploadButton = styled.div`
  display: flex;
  align-items: center;
`;

export const ErrorMessage = styled.span`
  color: ${p => p.theme.colors.error};
`;

export const PreviewImg = styled.img<{ height?: number; aspectRatio?: number }>`
  height: ${({ height = 35 }) => height}px;
  width: ${({ height = 35, aspectRatio = 1 }) =>
    aspectRatio < 2 ? height * aspectRatio : height * 2}px;
  margin-right: 8px;
`;

export const IconButton = styled(Icon)`
  cursor: pointer;
  color: red;
`;

export const Grow = styled.div`
  flex-grow: 1;
`;

export const Text = styled.span`
  margin-left: 12px;
  font-size: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const FilledVariantUpload = styled.div`
  color: #6a6a6a;
  font-size: 16px;
  margin-top: 6px;
  margin-left: 4px;
`;
