import styled from 'styled-components';
import { theme } from 'utils/constants/theme';
import ellipse from '../../data/img/ellipse.png';

export const UserCardStyled = styled.li`
  width: 100%;
  max-width: 380px;
  min-height: 460px;
  padding: 28px 36px 36px;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: ${theme.borderRadius.card};
  background-color: ${theme.colors.accent2};
  background-image: ${theme.gradients.userCard};
  box-shadow: ${theme.shadows.card};

  text-transform: uppercase;
  text-align: center;
  overflow: hidden;

  & .userCard__logo {
    position: absolute;
    top: 20px;
    left: 20px;
  }

  & .userCard__tweetImg {
    margin-bottom: 88px;
  }

  & .userCard__line {
    position: absolute;
    top: 39%;
    left: 0;
    transform: translate(0, -50%);
    width: 100%;
    height: 8px;

    background-color: ${theme.colors.white};
    box-shadow: ${theme.shadows.line};
  }

  & .userCard__ellipse {
    position: absolute;
    top: 39%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
    padding: 8px;
    border-radius: 50%;
    background-color: ${theme.colors.violet};
    background-image: url(${ellipse});
  }

  & .userCard__avatar {
    object-fit: cover;
  }

  & .userCard__tweets,
  & .userCard__followers {
    ${theme.text(20, 24)}
    font-weight: 500;
    color: ${theme.colors.white};
  }

  & .userCard__tweets {
    margin-bottom: 16px;
  }

  & .userCard__followers {
    margin-bottom: 26px;
  }

  ${theme.media.tablet} {
    width: 380px;

    & .userCard__line {
      top: 50%;
    }

    & .userCard__ellipse {
      top: 50%;
    }
  }
`;
