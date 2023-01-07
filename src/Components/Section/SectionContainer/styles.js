import styled from 'styled-components';

const Wrapper = styled.div`
  display: ${props => (props.displayBlock ? 'block' : 'flex')};
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: ${props =>
    props.fullWidth === true
      ? '0'
      : !!props.noPad
      ? '0 20px 20px 20px'
      : '0 20px 20px 40px'};
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  overflow: ${props => (props.scrollable ? 'auto' : 'unset')};

  > .section-item,
  > .section-list {
    box-sizing: border-box;
    width: ${props => (props.col > 1 ? 100 / props.col : 100)}% !important;
  }

  > .section-form-input {
    box-sizing: border-box;
    padding-right: 20px;
    width: ${props => (props.col > 1 ? 100 / props.col : 100)}%;
  }
`;

export { Wrapper };
