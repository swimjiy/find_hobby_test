// import * as React from 'react';
import * as React from 'react'
import { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom';

interface TestProps {
	getIsTest(): void;
	loading: number;
}

interface TestState {
	data: Array<string>;
	questionList: Array<number>;
	stepNumber: number;
	count: number;
}

interface ITest {
	clickChoice(num: number): void;
	fetchQuestions(): void;
}

interface Questions {
	id: number;
	question: string;
	choice: Array<string>;
}

const Test: React.FC<TestProps> = (props) => {
	const [questionList, setQuesList] = useState([]);
	const [stepNumber, setStepNumber] = useState(1);
	const loading = props.loading;
	console.log("l : " , props.loading);
	const fetchQuestions = async (): Promise<Array<Questions> | undefined> => {
		const api = `data/QuestionData.json`;
		try {
			const response = await fetch(api);
			const data = await response.json();
			setQuesList(data.questionData);
			console.log(data);
			console.log(props.loading);
			return data;
		} catch (error) {
			console.log(error);
			return error.message;
		}
	}
	const clickChoice = (num: number): void => {
		setStepNumber(stepNumber + 1);
	}
	useEffect(() => {
		if (stepNumber === 1) {
			fetchQuestions();
		} else if (stepNumber === 3) {
			props.getIsTest();
			console.log("end");
		}
	}, [stepNumber])
	return (
		<section>
			결과를 봅시다!
			<button onClick={() => clickChoice(0)}>1번</button>
			<button onClick={() => clickChoice(1)}>2번</button>
			<div>{stepNumber}</div>
			<Link to="/result">결과보기</Link>
		</section>
	);
}
export default Test;
