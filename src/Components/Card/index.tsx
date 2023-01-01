import styled from 'styled-components';
import { Card as ReactstrapCard } from './reactstrap';

interface CardProps {
  children: React.ReactNode;
  noPadding?: boolean;
  height?: number;
}

const Card = ({ children, ...rest }: CardProps): JSX.Element => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

const Wrapper = styled(({ noPadding, ...props }) => (
  <ReactstrapCard {...props} />
))<CardProps>`
  padding: ${props => (props.noPadding ? 'unset' : '40px 20px 40px 20px')};
  text-align: center;
  cursor: pointer;
  border-radius: 15px;
  overflow: hidden;
  height: inherit;

  @media (max-width: ${props => props.theme.breakpoints.phone}px) {
    padding: ${props => (props.noPadding ? 'none' : '40px 10px 40px 10px')};
  }
  &:hover {
    box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 12.5%);
    transition: box-shadow 0.2s ease;
  }
`;

export default Card;

export { default as CardActions } from './CardActions';
export { default as CardActionButton } from './CardActionButton';
export { default as CardBody } from './CardBody';
export { default as CardHeader } from './CardHeader';
