import * as React from 'react';
import Result from '../components/Result';
import { RouteComponentProps } from 'react-router';

interface MatchParams {
	id?: string | undefined;
}

interface ResultProps extends RouteComponentProps<MatchParams> {
}

const ResultPage: React.FC<ResultProps> = ({match}) => {
	const type:number = Number(match.params.id);
	return (
		<Result type={type}/>
	)
}

export default  ResultPage;
