import * as React from 'react';
import { Link, Redirect } from 'react-router-dom';

interface TestProps {
	onClick(): void;
}

interface TestState {
	data: Array<string>;
	questionList: Array<number>;
	stepNumber: number;
}

interface Questions {
	id: number;
	question: string;
	choice: Array<string>;
}
export default class Test extends React.Component<TestProps, TestState> {
	state:TestState = {
		data: [],
		questionList: [],
		stepNumber: 0,
	}
	fetchQuestions = async (): Promise<Array<Questions> | undefined> => {
		const api = `data/QuestionData.json`;
		try {
			const response = await fetch(api);
			const data = await response.json();
			this.setState({ questionList: data.questionData });
			console.log(data);
			return data;
		} catch (error) {
			console.log(error);
			return error.message;
		}
	}
	componentDidMount() {
		this.fetchQuestions();
	}
	// useEffect(() => {
	// 	fetchQuestions()
	// }, [stepNumber])
	
	render() {
		let stepNumber = this.state.stepNumber;
		let questionList = this.state.questionList;
		console.log(questionList[0])
		if (stepNumber === 12) {
			return <Redirect to={{pathname: "/result", state: {stepNumber: this.state.stepNumber}}}/>;
		}
		return (
			<section>
				결과를 봅시다!
				<button onClick={() => this.clickChoice(0)}>1번</button>
				<button onClick={() => this.clickChoice(1)}>2번</button>
				<div>{this.state.stepNumber}</div>
				<Link to="/result">결과보기</Link>
			</section>
		)
	}
	clickChoice(num: number): void {
		this.setState({
			stepNumber: this.state.stepNumber + 1,
		})
	}
}
