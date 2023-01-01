import Color from 'color';
import styled, { css } from 'styled-components';
import { IconButton, makeStyles } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import UnstyledSkeleton from 'react-loading-skeleton';

export const Wrapper = styled.div<{
  fullHeight?: boolean;
  fullWidth?: boolean;
  border?: boolean;
  collapsed?: boolean;
  formSection?: boolean;
  transparent?: boolean;
}>`
  width: ${props => (props.fullWidth ? '100%' : 'auto')};
  background-color: ${props =>
    props.transparent ? 'none' : props.theme.colors.white};
  height: ${props => (props.fullHeight ? '100%' : 'auto')};

  position: relative;

  border-radius: 10px;

  border-bottom: ${({ border = true, theme }) =>
    border ? `1px solid ${theme.colors.iron}` : '0 '};

  margin: 5px;

  ${({ formSection, collapsed }) => {
    return formSection
      ? css`
          margin-bottom: 0;
          padding-bottom: 0;
          min-height: 0;
        `
      : css`
          margin-bottom: 30px;
          padding-bottom: ${collapsed ? '0' : '20px'};
        `;
  }};
`;

export const AlertWrapper = styled.div<{
  isError?: boolean;
  subtitle?: boolean;
}>`
  width: 100%;
  height: 55px;
  background-color: ${props => {
    const color = props.isError
      ? props.theme.colors.error
      : props.theme.colors.persian;
    return Color(color).fade(0.2).toString();
  }};
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  font-size: 18px;
  font-weight: 400;
  line-height: 18px;
  padding-left: 40px;
  padding-top: 20px;
`;

export const Title = styled.div<{ subtitle?: boolean }>`
  font-size: 22px;
  line-height: 22px;
  padding: 20px 15px ${props => (props.subtitle ? '12px' : '20px')} 0;
  font-weight: 400;
  color: ${props => props.theme.palette.primary.main};
  display: flex;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubtitleWrapper = styled(TitleWrapper)`
  justify-content: center;
`;

export const Subtitle = styled.div`
  font-size: 14px;
  line-height: 22px;
  padding: 0 15px 16px 0;
  font-weight: normal;
  color: ${props => props.theme.palette.secondary.main};
  display: flex;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  padding-left: 40px;
`;

export const BadgeWrapper = styled.div`
  margin-top: 18px;
`;

export const Skeleton = styled(UnstyledSkeleton)`
  height: 38px;
  width: 100px !important;
  margin-top: 20px;
`;

export const StyledIconButton = styled(IconButton)`
  height: 24px !important;
  width: 24px !important;
  margin-left: 8px !important;
`;

const useStyles = makeStyles(theme => ({
  icon: {
    transition: theme.transitions.create(['transform'], {
      duration: theme.transitions.duration.short,
    }),
  },
  expanded: {
    transform: 'rotate(-180deg)',
  },
  collapsed: {
    transform: 'rotate(0)',
  },
}));

export function ExpandMoreIcon({
  collapsed,
}: {
  collapsed?: boolean;
}): JSX.Element {
  const classes = useStyles();
  return (
    <ExpandMore
      className={[
        classes.icon,
        collapsed ? classes.collapsed : classes.expanded,
      ].join(' ')}
    />
  );
}
