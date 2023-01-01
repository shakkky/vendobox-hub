import styled from 'styled-components';
import { Color } from 'styles/colors';

interface IResumeCardWrapperProps {
  selected?: boolean;
}

const Wrapper = styled.div<IResumeCardWrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 200px;
  padding: 20px;

  border: 1px solid
    ${props => Color(props.theme.colors.lightGrey).fade(0.5).string()};
  border-radius: 5px;
  :hover {
    border: 1px solid ${props => props.theme.colors.blue};
  }

  ${props => {
    let css = '';
    if (props.selected) {
      css = `
              border: 1px solid ${props.theme.colors.blue};
              background-color: ${Color(props.theme.colors.blue)
                .fade(0.9)
                .string()};
            `;
    }
    return css;
  }}
`;

const Title = styled.div`
  font-size: 1.2rem;
`;

const Subtitle = styled.div`
  font-size: 0.9rem;
`;

const CreateDate = styled.div`
  font-size: 0.8rem;
`;

const ButtonWrapper = styled.div`
  margin: auto;
  padding-top: 15px;
`;

export { Wrapper, Title, Subtitle, CreateDate, ButtonWrapper };
