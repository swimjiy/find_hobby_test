import * as React from 'react'
import { useState, useEffect } from 'react'
import Button from '../components/Button'
import styled from 'styled-components';

interface QuestionProps {
	getType(type: number): void;
}

interface IQuestionList {
	id: number;
	type: Array<number>;
	question: string;
	answer: Array<Array<number | string>>;
}

const Question: React.FC<QuestionProps> = ({ getType }) => {
	const [questionList, setQuesList] = useState<IQuestionList[]>([]);
	const [question, setQuestion] = useState<Partial<IQuestionList>>({});
	const [step, setStep] = useState<number>(1);
	const [type, setType] = useState<number>(0);
	const [calType, setCalType] = useState<Array<number>>(new Array(6).fill(0));
	
	const fetchQuestions = async (): Promise<Array<IQuestionList> | undefined> => {
		const api = `data/QuestionData.json`;
		try {
			const response = await fetch(api);
			const data = await response.json();
			setQuesList(data.questionData);
			setQuestion(data.questionData[0]);
			return data;
		} catch (error) {
			console.log(error);
			return error.message;
		}
	}
	const clickChoice = (num: number): void => {
		setStep(step + 1);
		setQuestion(questionList[step]);
		if (num === 1) {
			let newArr = [...calType];
			{question.type &&
				question.type.map((item: any) => {
					newArr[item - 1] += 1;
				})
			}
			setCalType(newArr);
		}
		if (step === 15)
			calculateType();
	}
	const calculateType = (): void => {
		const max = Math.max.apply(null, calType);
		let answer = [];
		let index = -1;
		console.log(calType);
		do {
			index = calType.indexOf(max, index + 1);
			if (index >= 0)
				answer.push(index + 1);
		} while (index != -1);
		if (answer.length > 1) {
			setType(answer[answer.length - 1]);
			console.log("여러개일 때 작업...");
		} else {
			setType(answer[0]);
		}
	}
	useEffect(() => {
		if (step === 1) {
			fetchQuestions();
		} else if (step === 16) {
			// setTimeout(() => {
				getType(type);
			// }, 1000);
		}
	}, [step])
	return (
		<QuesWrap>
			{question && 
			<Content>
				<TextWrap>
					<Step>{step} / 15</Step>
					<Graph><GraphInner></GraphInner></Graph>
					<Title>Q{question.id}. <strong>{question.question}</strong></Title>
				</TextWrap>
				<ButtonWrap>
					{question.answer && 
						question.answer.map((item: any) => {
							return (<Button onClick={() => clickChoice(item.id)}>{item.answerText}</Button>)
						})
					}
				</ButtonWrap>
			</Content>
			}
		</QuesWrap>
	);
}

export default Question;

const QuesWrap = styled.div `
	display: flex;
	flex-direction: column;
	justify-content: center; 
	min-height: 100vh;
	background-color: #fff;
`
const Step = styled.p `
	margin-top:2em;
	margin-bottom: 3em;
	font-size: 1.125em;
	font-weight: 400;
	color: #000;
`
const Title = styled.div `
	width: 90%;
	margin: 0 auto;
	margin-bottom: 0.5em;
	font-size: 1.5em;
	font-weight: 700;
	line-height: 1.5em;
	color: #000;
`
const Content = styled.div `
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
`
const Graph = styled.div `
	width: 90%;
	height: 0.983em;
	margin: 0 auto 5em;
	border-radius: 2em;
	background-color: #F8F8F8;
`
const GraphInner = styled.div `
	width: 40%;
	height: 100%;
	margin-bottom: 1em;
	border-radius: 2em;
	background-color: #3F39E0;
`
const TextWrap = styled.div `
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	padding: 0 5%;
`
const ButtonWrap = styled.div `
	padding: 1em 5% 4em;
	border-top-left-radius: 35px;
	border-top-right-radius: 35px;
	background-color: #F8F8F8;
`
