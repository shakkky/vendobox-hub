import styled from 'styled-components';
import { Row, Col } from './reactstrap';

const PageHeaderWrapper = styled.div<{ subHeading?: unknown }>`
  position: relative;
  background-color: ${props => props.theme.colors.white};
  padding-top: 25px;
  padding-bottom: ${props => (props.subHeading ? '29px' : '25px')};
  padding-left: 40px;
  padding-right: 40px;

  border-radius: 10px;
  margin: 5px;

  button {
    outline: none;
  }

  box-shadow: 1px 1px 2px #aaaaaa;
`;

const StatusWrapper = styled.div`
  position: absolute;
  top: 35px;
  right: 30px;
`;

const ActionContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row-reverse;
  margin-right: 27px;
  @media (min-width: ${props =>
      props.theme.breakpoints.tablet}px) and (max-width: ${props =>
      props.theme.breakpoints.tablet + 30}px) {
    margin-right: 0;
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}px) {
    margin-right: 0;
  }
`;

const SubHeadingWrapper = styled.div`
  font-size: 17px;
  color: ${props => props.theme.colors.darkGrey};
  opacity: 0.87;
  /* padding-bottom: 15px; */
  align-items: center;
  max-width: 83%;
  margin-left: 15px;
`;

const TitleWrapper = styled.span`
  font-size: 28px;
  color: ${props => props.theme.colors.darkPurple};
  font-weight: 600;
  opacity: 0.87;
  margin-left: 15px;
  display: flex;
`;

const SubHeading = styled.div<{ noPad?: boolean }>`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  padding-top: ${p => (p.noPad ? '0px' : '12px')};
`;

const Children = styled(Row)`
  margin-left: 0;
`;

const ApplicationErrors = styled.div`
  margin: 20px 0 20px -40px;
  width: calc(100% + 80px);
`;

export {
  ActionContainer,
  PageHeaderWrapper,
  SubHeading,
  SubHeadingWrapper,
  StatusWrapper,
  TitleWrapper,
  Children,
  ApplicationErrors,
  Row,
  Col,
};
