import * as React from 'react';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Test from './Test';
import Result from './Result';

interface HomeProps {
	// isTest: boolean;
}
interface HomeState {
	isTest: boolean;
	loading: number;
}
const Home: React.FC<HomeProps> = (props) => {
	const [isTest, setIsTest] = useState(false);
	const [loading, setLoading] = useState(3);

	const getIsTest = ():void => {
		setIsTest(true);
		console.log("getIsTest : " , isTest);
	}
	
	return (
		<section>
			심리테스트를 시작해봅시다..!
			{
				!isTest ? (
					<Test getIsTest={() => getIsTest()} loading={1}/>
				) : (
					<Result/>
				)
			}
			<Link to="/test">시작하기</Link>
		</section>
	)
}
export default  Home;
