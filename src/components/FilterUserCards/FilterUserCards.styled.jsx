import styled from 'styled-components';
import { theme } from 'utils/constants/theme';

export const SelectStyled = styled.select`
  padding: 5px;

  background-color: ${theme.colors.white};
  color: ${theme.colors.accent2};
  cursor: pointer;
  border-radius: 5px;
  border: 2px solid ${theme.colors.accent};
  box-shadow: ${theme.shadows.card};
  text-shadow: ${theme.shadows.textAccent2};
  text-align: center;
  transition: transform ${theme.cubic};

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
