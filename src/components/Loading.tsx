import * as React from 'react';
import styled, { keyframes } from 'styled-components';

const Loading = () => {
	return (
		<LoadingWrap>
			<Spinner/>
			<Text>결과 분석중...</Text>
		</LoadingWrap>
	)
}

export default Loading;

const LoadingWrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	background-color: #3F39E0;
`
const rotate = keyframes`
	0% {
		transform: scale(0);
	}
	100% {
		transform: scale(1);
		opacity: 0;
	}
`
const Spinner = styled.div`
	width: 3em;
	height: 3em;
	border-radius: 100%;
	background-color: #fff;
	animation: ${rotate} 1s infinite ease-in-out;
`
const Text = styled.span`
	margin-top: 2em;
	font-size: 1.125em;
	font-weight: 700;
	color: #fff;
`

