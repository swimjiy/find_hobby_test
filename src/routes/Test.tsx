import * as React from 'react';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Question from '../components/Question';
import Result from '../components/Result';

interface TestProps {
	// isTest: boolean;
}
interface TestState {
	isTest: boolean;
	type: number;
	getType(type: number): void;
}
const Test: React.FC<TestProps> = (props) => {
	const [isTest, setIsTest] = useState(false);
	const [type, setType] = useState(0);

	const getIsTest = ():void => {
		setIsTest(true);
	}
	const getType = (type: number):void => {
		setType(type);
	}
	useEffect(() => {
		if (type === 0) {
			console.log("type: " , type);
		} else if (type === 3) {
			console.log("type: " , type);
		}
	}, [type])
	
	return (
		<section>
			심리테스트를 시작해봅시다
			{
				!isTest ? (
					<Question getIsTest={() => getIsTest()} getType={(type) => getType(type)}/>
				) : (
					<Result/>
				)
			}
		</section>
	)
}
export default  Test;
