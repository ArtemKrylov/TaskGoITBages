import { Container } from 'components/GlobalStyle';
import styled from 'styled-components';
import { theme } from 'utils/constants/theme';

export const HomePageStyled = styled(Container)`
  position: relative;
  padding-top: 20px;
  height: 100vh;

  & .homePage__mainTitle {
    margin-bottom: 30px;
    text-align: center;
    color: ${theme.colors.accent3};
  }

  & .tweetsNavigateBtn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
