import styled from 'styled-components';
import { theme } from 'utils/constants/theme';

export const UserCardListStyled = styled.ul`
  ${theme.flexCenterAndGap(25)}
  flex-wrap: wrap;
`;

export const UserCardListNoUsersStyled = styled.h2`
  height: 100px;
  color: ${theme.colors.white};
  ${theme.flexCenterAndGap(25)};
`;
