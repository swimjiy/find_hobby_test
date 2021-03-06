import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import styled from 'styled-components';
import ImgMain from '../images/img-main.png'

const Home = () => {
	return (
		<HomeWrap>
			<Title>나에게 어울리는<br/>집콕 취미생활 찾기</Title>
			<SubTitle>내 취미 유형과 집에서 200% 즐기는 방법을 알아보자</SubTitle>
			<Image><img src={ImgMain} alt=""/></Image>
			<Link to="/question">
				<Button color={"green"}>테스트 시작하기</Button>
			</Link>
		</HomeWrap>
	)
}

export default  Home;

const HomeWrap = styled.div `
	display: flex;
	flex-direction: column;
	justify-content: center; 
	min-height: 100vh;
	padding: 0 5%;
	background-color: #3F39E0;
`
const Title = styled.h2 `
	margin-bottom: 0.5em;
	font-size: 1.5em;
	font-weight: 700;
	line-height: 1.5em;
	color: #fff;
`
const SubTitle = styled.p `
	margin-bottom: 3em;
	font-size: 0.875em;
	color: #fff;
`
const Image = styled.div `
	width: 100%;
	max-width: 25em;
	margin: 0 auto;
	background-color: #fff;
	border-radius: 10%;
	img {
		width: 100%;
	}
`
