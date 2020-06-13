import * as React from 'react'
import { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom';

interface QuestionProps {
	getIsTest(): void;
	getType(type: number): void;
}

interface QuestionState {
	data: Array<string>;
	questionList: Array<string>;
	questionOne: Array<string>;
	stepNumber: number;
	count: number;
	type: number;
}

interface IQuestion {
	clickChoice(num: number): void;
	calculateType(num: number): void;
	fetchQuestions(): void;
	questionList: Array<Questions>;
}

interface Questions {
	id: number;
	question: string;
	choice?: Array<string>;
}
interface IQuestionList {
	id: number;
	question: string;
	answer?: Array<Array<number | string>>;
}

const Question: React.FC<QuestionProps> = (props) => {
	const [questionList, setQuesList] = useState<IQuestionList[] | any>([]);
	const [questionOne, setQuesOne] = useState<IQuestionList | any>([]);
	const [stepNumber, setStepNumber] = useState<number>(1);
	const [type, setType] = useState<number>(0);
	
	const fetchQuestions = async (): Promise<Array<any> | undefined> => {
		const api = `data/QuestionData.json`;
		try {
			const response = await fetch(api);
			const data = await response.json();
			setQuesList(data.questionData);
			setQuesOne(data.questionData[0]);
			return data;
		} catch (error) {
			console.log(error);
			return error.message;
		}
	}
	const clickChoice = (num: number): void => {
		setStepNumber(stepNumber + 1);
		setQuesOne(questionList[stepNumber]);
		if (num > 0)
			calculateType(stepNumber);
	}
	const calculateType = (num: number): void => {
		if (num === 1) {
			setType(1);
		} else if (num === 2) {
			setType(2);
		} else if (num === 3) {
			setType(num);
		} else if (num === 4) {
			setType(4);
		} else {
			setType(5);
		}
	}
	useEffect(() => {
		if (stepNumber === 1) {
			fetchQuestions();
		} else if (stepNumber === 3) {
			props.getIsTest();
			props.getType(type);
		}
	}, [stepNumber])
	return (
		<section>
			<div>{stepNumber} / 15</div>
			{questionOne && 
				<div>
				<div>그래프</div>
				<h2>1. <strong>{questionOne.question}</strong></h2>
				{questionOne.answer && 
					questionOne.answer.map((item: any) => {
						return (<button onClick={() => clickChoice(item.id)}>{item.answerText}</button>)
					})
				}
				</div>
			}
		</section>
	);
}
export default Question;
