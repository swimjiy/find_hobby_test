import * as React from 'react';
import { useState } from 'react'
import Question from '../components/Question';
import Result from '../components/Result';

const Test = () => {
	const [type, setType] = useState<number>(0);
	const getType = (type: number):void => {
		setType(type);
	}
	return (
		<section>
			{
				(type == 0) ? (
					<Question getType={(type) => getType(type)}/>
				) : (
					<Result type={type}/>
				)
			}
		</section>
	)
}

export default  Test;
