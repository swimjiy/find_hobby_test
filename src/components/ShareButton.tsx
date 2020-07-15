import * as React from 'react';
import styled from 'styled-components';

interface ShareButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	type?: string | any;
}

const ShareButton: React.SFC<ShareButtonProps> = ({ type, children, ...props }) => {
	return (
		<ButtonShare className={type}>{children}</ButtonShare>
	)
}

export default ShareButton;

const ButtonShare = styled.button `
	width: 4em;
	height: 4em;
	border-radius: 1em;
	border: none;
	background-color: #FFF29E;
	&.icon-kakao {
		background-color: #FFF29E;
	}
	&.icon-facebook {
		background-color: #C9E5FF;
	}
	&.icon-twitter {
		background-color: #C9F8FF;
	}
	&.icon-link {
		background-color: #F2F2F2;
	}
`
