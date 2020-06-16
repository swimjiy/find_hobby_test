import * as React from 'react';
import styled from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	color?: string;
}

const Button: React.SFC<ButtonProps> = ({ color, children, ...props }) => {
	return (
		<StyledButton color={color} {...props}>{children}</StyledButton>
	)
}

export default Button;

const StyledButton = styled.button`
	width: 100%;
	margin: 0 auto;
	margin-top: 2em;
	padding: 1em;
	text-align: center;
	font-size: 1.125em;
	font-weight: 700;
	color: #000;
	border: none;
	border-radius: 1em;
	background-color: ${props => (props.color ? '#67FC96' : '#C9D6FF')};
	@media only screen and (max-width: 480px) {
		font-size: 1
	}
`
