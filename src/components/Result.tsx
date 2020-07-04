import * as React from 'react';
import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom';
import QuestionResult from '../data/QuestionResult.json'
import Button from '../components/Button'
import styled from 'styled-components';
import IconLink from '../images/icon-link.svg';
import IconFacebook from '../images/icon-facebook.svg';
import IconKakao from '../images/icon-kakaotalk.svg';
import IconTwitter from '../images/icon-twitter.svg';
import ImgMain from '../images/img-main.png'

interface ResultProps {
	type: number;
}

interface IresultList {
	id: number;
	subTitle: string;
	title: string;
	description: string;
	recommand: Array<Array<number | string>>;
}

const Result: React.FC<ResultProps> = ({ type }) => {
	const [resultList, setResultList] = useState<Partial<IresultList>>({});
	
	const fetchResults = useCallback((QuestionResult, type) => {
		setResultList(QuestionResult.questionResult[type - 1]);
	}, []);

	useEffect(() => {
		if (type >= 0) 
			fetchResults(QuestionResult, type);
	}, [type, fetchResults])

	return (
		<section>
			{resultList &&
				<section>
					<TextWarp>
						<Title>나의 집콕 유형은</Title>
						<Image><img src={ImgMain}/></Image>
						<SubTitle>{resultList.subTitle}</SubTitle>
						<Name>{resultList.title}</Name>
						<Description>{resultList.description}</Description>
					</TextWarp>
					<Section>
						<div>
							<TitleDepth2>집콕으로 200% 즐기기</TitleDepth2>
							<ListWrap>
							{resultList.recommand && 
								resultList.recommand.map((item: any) => {
									return (<List>{item.description}</List>)
								})
							}
							</ListWrap>
						</div>
						<div>
							<TitleDepth2>테스트 공유하기</TitleDepth2>
							<ButtonWrap>
								<ButtonShare className="icon-kakao"><img src={IconKakao} alt="카카오톡 공유"/></ButtonShare>
								<ButtonShare className="icon-facebook"><img src={IconFacebook} alt="페이스북 공유"/></ButtonShare>
								<ButtonShare className="icon-twitter"><img src={IconTwitter} alt="트위터 공유"/></ButtonShare>
								<ButtonShare className="icon-link"><img src={IconLink} alt="url 공유"/></ButtonShare>
							</ButtonWrap>
						</div>
						<Link to="/">
							<Button>테스트 다시하기</Button>
						</Link>
					</Section>
				</section>
			}
		</section>
	)
}

export default Result;
 
const TextWarp = styled.div `
	padding: 2em 5%;
`

const Title = styled.h2 `
	margin-bottom: 0.5em;
	font-size: 1.5em;
	font-weight: 700;
	line-height: 1.5em;
	color: #000;
`
const SubTitle = styled.p `
	margin-bottom: 1em;
	font-size: 0.875em;
	color: #000;
	text-align: center;
`
const Name = styled.h3 `
	margin-bottom: 3em;
	padding: 1em;
	font-size: 1.125em;
	font-weight: 700;
	color: #fff;
	text-align: center;
	border-radius: 1em;
	background-color: #3F39E0;
`
const Description = styled.p `
	margin-bottom: 3em;
	font-size: 0.875em;
	line-height: 1.5em;
	text-align: left;
	color: #000;
`
const Image = styled.div `
	width: 100%;
	max-width: 25em;
	margin: 0 auto;
	img {
		width: 100%;
	}
`
const Section = styled.div `
	padding: 3em 7% 4em;
	border-top-left-radius: 35px;
	border-top-right-radius: 35px;
	background-color: #F8F8F8;
`
const ListWrap = styled.ul `
	margin-bottom: 4em;
`
const List = styled.li `
	position: relative;
	margin-left: 1em;
	margin-bottom: 1em;
	text-align: left;
	line-height: 1.5em;
	&::before {
		content: '';
		display: block;
		position: absolute;
		left: -0.875em;
		top: 0.5em;
		width: 4px;
		height: 4px;
		border-radius: 50%;
		background-color: #3F39E0;
	}
`
const TitleDepth2 = styled.h4 `
	margin-bottom: 1.5em;
	font-size: 1.125em;
	font-weight: 700;
	text-align: left;
`
const ButtonWrap = styled.div `
	display: flex;
	justify-content: space-between;
`
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
