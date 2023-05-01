import styled from 'styled-components';
import { theme } from 'utils/constants/theme';
import ellipse from '../../data/img/ellipse.png';
import logo from '../../data/img/Logo.png';
import logo2x from '../../data/img/Logo2x.png';
import cardTweetImg from '../../data/img/userCardBg.png';
import cardTweetImg2x from '../../data/img/userCardBg2x.png';

export const UserCardStyled = styled.li`
  width: 380px;

  max-width: 380px;
  min-height: 460px;
  padding: 187px 36px 36px;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: ${theme.borderRadius.card};
  background-color: ${theme.colors.accent2};
  background-image: url(${logo}), url(${cardTweetImg}),
    ${theme.gradients.userCard};
  background-repeat: no-repeat;
  background-position: 20px 20px, 36px 28px, top left;
  background-size: 76px 22px, 308px 168px, 100% 100%;

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    & {
      background-image: url(${logo2x}), url(${cardTweetImg2x}),
        ${theme.gradients.userCard};
    }
  }
  box-shadow: ${theme.shadows.card};

  text-transform: uppercase;
  text-align: center;
  overflow: hidden;
  transition: transform ${theme.cubic};

  &:hover,
  &:focus {
    transform: scale(1.05);
  }

  & .userCard__frame {
    position: relative;
    &::before,
    &::after {
      content: '';
      position: absolute;
      display: block;
      z-index: 2;
    }

    /* Horizontal line */
    &::before {
      top: calc((62px - 8px) / 2);
      left: calc((380px - 62px) / 2 * -1);
      width: 380px;
      height: 8px;
      background-color: ${theme.colors.white};
      box-shadow: ${theme.shadows.line};
    }

    /* Ellipse */
    &::after {
      top: -8px;
      left: -8px;
      width: 78px;
      height: 78px;
      border-radius: 50%;
      background-color: ${theme.colors.violet};
      background-image: url(${ellipse});
    }
  }

  & .userCard__avatar {
    margin-bottom: 35px;
    position: relative;
    z-index: 3;
    background-color: ${theme.colors.violet};
    object-fit: cover;
    border-radius: 50%;
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

  ${theme.media.mobileOnly} {
    width: 100%;
    background-size: 76px 22px, 253px 138px, 100% 100%;
    background-position: 15px 15px, calc(100% / 2) 28px, top left;
  }
`;
