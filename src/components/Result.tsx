import * as React from 'react';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Button from '../components/Button'
import styled from 'styled-components';

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
	const fetchResults = async (): Promise<Array<IresultList> | undefined> => {
		const api = `data/QuestionResult.json`;
		try {
			const response = await fetch(api);
			const data = await response.json();
			setResultList(data.questionResult[type - 1]);
			return data;
		} catch (error) {
			console.log(error);
			return error.message;
		}
	}
	useEffect(() => {
		if (type >= 0)
			fetchResults();
	}, [type])
	return (
		<section>
			{resultList &&
				<section>
					<TextWarp>
						<Title>나의 집콕 유형은</Title>
						<Image>이미지</Image>
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
								<ButtonShare>카카오톡 공유</ButtonShare>
								<ButtonShare>페이스북 공유</ButtonShare>
								<ButtonShare>트위터 공유</ButtonShare>
								<ButtonShare>url 공유</ButtonShare>
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
`
const Name = styled.h3 `
	margin-bottom: 3em;
	padding: 1em;
	font-size: 1.125em;
	font-weight: 700;
	color: #fff;
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
	height: 14em;
	margin-bottom: 3em;
	background-color: #ddd;
`
const Section = styled.div `
	/* margin-top: 4em; */
	padding: 3em 7% 4em;
	border-top-left-radius: 35px;
	border-top-right-radius: 35px;
	background-color: #F8F8F8;
`
const ListWrap = styled.ul `
	margin-bottom: 4em;
`
const List = styled.li `
	margin-left: 1em;
	margin-bottom: 1em;
	text-align: left;
	line-height: 1.5em;
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
`
