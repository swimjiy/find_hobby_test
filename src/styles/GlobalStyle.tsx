import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
	${reset}
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	body {
		background-color: #fff;
	}
	a {
		text-decoration: none;
		color: #000;
		cursor: pointer;
	}
	button {
		cursor: pointer;
	}
`

export default GlobalStyle;
