import styled from 'styled-components';

const Switch = styled.input`
  appearance: none;
  width: 30px;
  height: 14px;
  border: none;
  cursor: ${p => (p.disabled ? 'not-allowed' : 'pointer')};
  outline: none;
  background: #7f8fa4;
  border-radius: 30px;
  transition: all ease-out 0.2s;

  &[type='checkbox'],
  &[type='radio'] {
    padding: 2px;
    width: 30px;
    height: 30px;
  }

  &::before {
    content: '';
    display: block;
    background: ${p => p.theme.colors.white};
    width: 10px;
    height: 10px;
    border-radius: 100%;
    transition: all ease-out 0.2s;
  }

  &:checked {
    background: #00ae95;

    &::before {
      transform: translateX(16px);
    }
  }
`;

export default Switch;
