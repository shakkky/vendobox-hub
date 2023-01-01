import styled from 'styled-components';

const HideOnMobile = ({ children }: { children: React.ReactNode }) => {
  return <DivWrapper>{children}</DivWrapper>;
};

const DivWrapper = styled.div`
  @media (max-width: ${props => props.theme.breakpoints.phone}px) {
    display: none;
  }
`;

export default HideOnMobile;
