import styled, { createGlobalStyle } from 'styled-components';
import 'modern-normalize/modern-normalize.css';
import { theme } from 'utils/constants/theme';

export const GlobalStyle = createGlobalStyle`
  body {
		margin: 0;
		font-family: 'Montserrat', sans-serif;
	}

	.visually-hidden {
		position: absolute;
  	width: 1px;
		height: 1px;
		margin: -1px;
		padding: 0;
		overflow: hidden;
		border: 0;
		clip: rect(0 0 0 0);
	}

	.app {
		width: 100vw;
		min-height: 100vh;
		background-color: ${theme.colors.accent2};
		background-image: linear-gradient(140deg, ${theme.colors.darkBlue} 15%, ${theme.colors.accent2} 45%, ${theme.colors.accent3});
		background-attachment: fixed;

	}

	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
			monospace;
	}

	h1, h2, h3, h4, h5, h6, p {
		margin-top: 0;
		margin-bottom: 0;
	}

	ul, ol {
		margin-top: 0;
		margin-bottom: 0;
		padding-left: 0;
	}

	img {
		display: block;
		overflow: hidden;
		max-width: 100%;
	} 

	li {
		list-style: none;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	button {
		cursor: pointer;
	}

`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-right: 20px;
  padding-left: 20px;
  width: 100%;

  ${props => props.theme.media.tablet} {
    width: 768px;
    padding-right: 5px;
    padding-left: 5px;
  }

  ${props => props.theme.media.desktop} {
    width: 1200px;
  }
`;

export const Button = styled.button`
  padding: 14px 56px;

  border: none;
  border-radius: ${theme.borderRadius.card};
  color: ${theme.colors.black};
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.button};

  ${theme.text(18, 22)}
  font-weight: 600;
  text-transform: uppercase;

  transition: background-color ${theme.cubic}, transform ${theme.cubic},
    color ${theme.cubic}, outline ${theme.cubic}, text-shadow ${theme.cubic};

  &:hover,
  &:focus,
  &:active {
    background-color: ${theme.colors.accent};
    transform: translate(1px, 1px);
    color: ${theme.colors.accent3};
    text-shadow: ${theme.shadows.textAccent};
    outline: 1px solid ${theme.colors.accent3};
  }
`;
