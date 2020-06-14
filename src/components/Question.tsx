import * as React from 'react'
import { useState, useEffect } from 'react'
import Button from '../components/Button'

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
			setType(1);
			console.log("여러개일 때 작업...");
		} else {
			setType(answer[0]);
		}
	}
	useEffect(() => {
		if (step === 1) {
			fetchQuestions();
		} else if (step === 16) {
			getType(type);
		}
	}, [step])
	return (
		<section>
			<div>{step} / 15</div>
			{question && 
				<div>
				<div>그래프</div>
				<h2>Q{question.id}. <strong>{question.question}</strong></h2>
				{question.answer && 
					question.answer.map((item: any) => {
						return (<Button onClick={() => clickChoice(item.id)}>{item.answerText}</Button>)
					})
				}
				</div>
			}
		</section>
	);
}

export default Question;
