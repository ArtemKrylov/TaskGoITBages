import styled from 'styled-components';
import { theme } from 'utils/constants/theme';

export const SelectStyled = styled.select`
  padding: 5px;
  background-color: ${theme.colors.accent3};
  color: ${theme.colors.white};
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
`;
