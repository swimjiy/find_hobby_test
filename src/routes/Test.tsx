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
	return (
		<section>
			{
				!isTest ? (
					<Question getIsTest={() => getIsTest()} getType={(type) => getType(type)}/>
				) : (
					<Result type={type}/>
				)
			}
		</section>
	)
}
export default  Test;
