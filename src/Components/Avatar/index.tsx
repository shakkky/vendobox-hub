import React, { useMemo, useCallback } from 'react';
import styled from 'styled-components';

const formatName = (name: string): string => {
  if (!name) return '';
  const words = name.trim().split(' ');
  const firstLastNames =
    words.length > 1
      ? [words[0], words[words.length - 1]]
      : [words[0], words[0].charAt(1)];
  const initials = firstLastNames.map(word => word.charAt(0));
  return initials.map(i => i.toUpperCase()).join('');
};

const Avatar = ({
  firstName = '',
  lastName = '',
  photo,
  size,
  push,
}: {
  firstName?: Maybe<string>;
  lastName?: Maybe<string>;
  photo?: Maybe<string>;
  size: number;
  push: (route: string) => void;
}) => {
  const formattedText = useMemo(() => formatName(`${firstName} ${lastName}`), [
    firstName,
    lastName,
  ]);
  const onClick = useCallback(() => push('/my-account'), [push]);
  return (
    <Wrapper
      onClick={onClick}
      role="link"
      tabIndex={0}
      size={size}
      hasPhoto={!!photo}
      title={
        !!(firstName && lastName)
          ? `${firstName.trim()} ${lastName.trim()}`
          : ''
      }
    >
      {!photo && <Text size={size}>{formattedText}</Text>}
      {photo && <Image src={photo} size={size} alt="Avatar" />}
    </Wrapper>
  );
};

Avatar.defaultProps = {
  size: 36,
};

const Wrapper = styled.div<{ size: number; hasPhoto: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  &::after {
    content: '';
    position: absolute;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    border-radius: ${props => (props.size > 0 ? props.size / 2 : 0)}px;
    box-shadow: 0 0 23px -6px rgba(0, 0, 0, 75%);
    opacity: 0;
    transition: opacity 0.15s ease-in-out;
  }
  &:hover {
    cursor: pointer;
  }
  &::after:hover {
    opacity: 1;
  }
  &:hover::after {
    opacity: 1;
  }

  width: ${props => props.size}px;
  height: ${props => props.size}px;

  border-radius: ${props => (props.size > 0 ? props.size / 2 : 0)}px;
  overflow: hidden;
  background-color: ${({ theme, hasPhoto }) => !hasPhoto && theme.badge.white};
  margin-top: 2px;
  box-sizing: border-box;
`;

const Text = styled.div<{ size: number }>`
  font-size: ${props => Math.round(props.size * 0.5)}px;
  font-weight: bold;
  font-family: ${p => p.theme.fonts.heavy};
  color: ${p => p.theme.badge.blue};
`;

const Image = styled.img.attrs({ loading: 'lazy' })<{ size: number }>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
`;

export default React.memo(Avatar);
