import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
export const GlobalStyle = createGlobalStyle`
	html {
		box-sizing: border-box;
		width: 100vw;
		overflow-x: hidden;
	}

	*,
	*::before,
	*::after {
		box-sizing: inherit;
	}

	body {
		margin: 0;
		overflow: hidden;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
			Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
		color: ${props => props.theme.colors.black};
		background-color: ${props => props.theme.colors.white};
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
		margin: 0;
	}

	ul,
	ol {
		margin: 0;
		padding: 0;
	}

	img {
		display: block;
		max-width: 100%;
		height: auto;
	}
`;
