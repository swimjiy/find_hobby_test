import * as React from 'react';
import { Link } from 'react-router-dom';

interface ResultProps {
	stepNumber: number;
}

export default class Result extends React.Component<ResultProps> {
	render() {
		return (
			<section>
				또 해보세요!
				<Link to="/">시작하기</Link>
			</section>
		)
	}
}
