import styled from 'styled-components';
import { Badge } from 'reactstrap';

const BadgeWrapper = styled(Badge)`
  font-family: ${p => p.theme.fonts.heavy};
  letter-spacing: 0.5px;
  min-width: 70px;
  text-transform: uppercase;
  border: 1px solid;
  margin-right: 10px;

  ${props => {
    let backgroundColor = props.theme.badge[props.color];
    let fontColor = props.theme.colors.white;

    if (Array.isArray(backgroundColor)) {
      const [bg, font] = backgroundColor;
      backgroundColor = bg;
      fontColor = font || props.theme.colors.white;
    }

    if (props.outline === 'outline') {
      return `
      color: ${backgroundColor};
      border-color: ${backgroundColor};
      background-color: ${fontColor};
    `;
    }

    return `
      color: ${fontColor};
      border-color: ${backgroundColor};
      background-color: ${backgroundColor};
    `;
  }};
`;

export { BadgeWrapper };
