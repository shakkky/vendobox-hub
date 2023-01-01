import styled, { css } from 'styled-components';

const valueComponentMixin = ({ inline = false }) => css`
  font-size: 16px;
  margin: 6px 0 0 0;
  display: ${inline ? 'inline-block' : 'block'};
`;

export const Wrapper = styled.div<{ minHeight?: string; flexStyle?: boolean }>`
  padding-right: 15px;
  min-height: ${props => props.minHeight ?? '80px'};
  > .btn-link {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  ${({ flexStyle }) =>
    flexStyle &&
    css`
      text-align: left;

      > p {
        display: flex;
        width: auto;
      }

      > a {
        display: flex;
      }
    `};
`;

export const LabelText = styled.p`
  color: ${props => props.theme.palette.secondary.main};
  width: 500px;
  margin: 10px 0 0;
  font-size: 13px;
  & > span {
    color: ${props => props.theme.colors.persian};
  }

  @media (min-width: 320px) and (max-width: 767px) {
    width: auto !important;
  }
`;

export const ValueText = styled.p<{ inline?: boolean }>`
  ${props => valueComponentMixin(props)};
  color: ${({ theme }) => theme.colors.darkPurple};
`;

export const ValueLink = styled.a<{ inline?: boolean }>`
  ${props => valueComponentMixin(props)};
  color: ${({ theme }) => theme.colors.persian};
  text-decoration: underline;
`;

export const PreviewImage = styled.img`
  width: 200px;
`;
