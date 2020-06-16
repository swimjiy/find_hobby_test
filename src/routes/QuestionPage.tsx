import * as React from 'react';
import { useState } from 'react'
import { Redirect } from 'react-router-dom';
import Question from '../components/Question';
import Loading from '../components/Loading'

const QuestionPage = () => {
	const [type, setType] = useState<number>(0);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const getType = (type: number):void => {
		setType(type);
		setTimeout(() => setIsLoading(true), 2000);
	}
	return (
		<section>
			{
				(type === 0) ? (
					<Question getType={(type) => getType(type)}/>
				) : (
						(!isLoading) ? (
							<Loading/>
						) : (
							<Redirect to={`/result/${ type }`} />
					)
				)
			}
		</section>
	)
}

export default  QuestionPage;
