import * as React from 'react';
import { useState } from 'react'
import Question from '../components/Question';
import Result from '../components/Result';
import Loading from '../components/Loading'

const Test = () => {
	const [type, setType] = useState<number>(0);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const getType = (type: number):void => {
		setType(type);
		setTimeout(() => setIsLoading(true), 2000);
	}
	return (
		<section>
			{
				(type == 0) ? (
					<Question getType={(type) => getType(type)}/>
				) : (
						(!isLoading) ? (
							<Loading/>
						) : (
							<Result type={type}/>
					)
				)
			}
		</section>
	)
}

export default  Test;
