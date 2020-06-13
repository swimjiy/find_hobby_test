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
	calculateType(step: number, num: number): void;
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
	type: Array<number>;
	question: string;
	answer?: Array<Array<number | string>>;
}

const Question: React.FC<QuestionProps> = (props) => {
	const [questionList, setQuesList] = useState<IQuestionList[] | any>([]);
	const [questionOne, setQuesOne] = useState<IQuestionList | any>([]);
	const [stepNumber, setStepNumber] = useState<number>(1);
	const [type, setType] = useState<number>(0);
	const [calArray, setCalArray] = useState<Array<number | any>>(new Array(6).fill(0));
	
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
		if (num === 1) {
			let newArr = [...calArray];
			questionOne.type.map((item: any) => {
				newArr[item - 1] += 1;
			})
			setCalArray(newArr);
		}
		if (stepNumber === 15)
			calculateType(stepNumber, num);
	}
	const calculateType = (step: number, num: number): void => {
		const max = Math.max.apply(null, calArray);
		let answer = [];
		let index = -1;
		console.log(calArray);
		do {
			index = calArray.indexOf(max, index + 1);
			if (index >= 0)
				answer.push(index + 1);
		} while (index != -1);
		if (answer.length > 1) {
			setType(1);
			console.log("여러개일 때 작업...");
		} else {
			setType(answer[0]);
		}
	}
	useEffect(() => {
		if (stepNumber === 1) {
			fetchQuestions();
		} else if (stepNumber === 16) {
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
				<h2>Q{questionOne.id}. <strong>{questionOne.question}</strong></h2>
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
