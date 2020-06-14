import * as React from 'react';
import styled from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	color?: string;
}

const Button: React.SFC<ButtonProps> = ({ color, children, ...props }) => {
	return (
		<StyledButton style={{color}} {...props}>{children}</StyledButton>
	)
}

export default Button;

const StyledButton = styled.button`
	width: 100%;
	text-align: center;
	color: #000;
	border: none;
	background-color: #67FC96;
	@media only screen and (max-width: 480px) {
		font-size: 1
	}
`
