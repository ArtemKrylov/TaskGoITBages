import { Container } from 'components/GlobalStyle';
import styled from 'styled-components';
import { theme } from 'utils/constants/theme';
import twitter from '../../data/img/twitter.jpg';

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
    color: ${theme.colors.darkBlue};
    animation: magic 2s infinite ease-out;

    &::before {
      content: '';
      position: absolute;
      top: -50px;
      left: 0;

      width: 30px;
      height: 30px;
      background-image: url(${twitter});
      background-size: cover;
      border-radius: 50%;
      animation: logoAnimation 2s infinite linear;
    }
  }

  @keyframes magic {
    0% {
      background-color: #f2e2ba;
    }
    50% {
      background-color: #baf2bb;
    }
    70% {
      background-color: #80ffdb;
    }
  }

  @keyframes logoAnimation {
    0% {
      left: 0;
      top: -50px;
    }
    25% {
      top: -30px;
    }
    50% {
      left: 50%;
      top: -50px;
    }
    75% {
      left: 75%;
      top: -30px;
    }
    100% {
      left: calc(100% - 30px);
      top: -50px;
    }
  }
`;
