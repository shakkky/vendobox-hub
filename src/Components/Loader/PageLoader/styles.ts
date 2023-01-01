import styled from 'styled-components';

const loaderBg = '#f3f3f3';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  vertical-align: middle;
  align-items: center;
  width: 100%;
  height: calc(100vh - 170px);
  flex-direction: column;
  background: ${loaderBg};
`;

export const Label = styled.div`
  font-weight: 800;
  font-size: 25px;
  margin-top: 10px;
`;

export const ImageLoader = styled.img`
  background-color: ${loaderBg};
  border-radius: 10px;
`;
