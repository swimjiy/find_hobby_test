import * as React from 'react';
import { Link } from 'react-router-dom';

interface ResultProps {
	stepNumber?: number;
}

interface ResultState {
	resultList: Array<string>;
}

interface Results {
	id: number;
	subTitle: string;
	title: string;
	description: string;
}

export default class Result extends React.Component<ResultProps, ResultState> {
	state:ResultState = {
		resultList: []
	}
	fetchResults = async (): Promise<Array<Results> | undefined> => {
		const api = `data/QuestionResult.json`;
		try {
			const response = await fetch(api);
			const data = await response.json();
			this.setState({ resultList: data.questionResult });
			console.log(data);
			return data;
		} catch (error) {
			console.log(error);
			return error.message;
		}
	}
	componentDidMount() {
		this.fetchResults();
	}
	render() {
		return (
			<section>
				또 해보세요!
				<Link to="/">시작하기</Link>
			</section>
		)
	}
}
