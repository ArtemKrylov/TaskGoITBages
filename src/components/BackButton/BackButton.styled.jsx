import { Button } from 'components/GlobalStyle';
import styled from 'styled-components';

export const BackButtonStyled = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  position: absolute;
  top: 20px;
  left: 20px;

  @media screen and (max-width: 768px) {
    width: 40px;
    height: 40px;
    padding: 8px;
    & .backButton__text {
      display: none;
    }
  }
`;
