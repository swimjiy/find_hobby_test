import * as React from 'react';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

interface HomeProps {
}
interface HomeState {
}
const Home: React.FC<HomeProps> = (props) => {
	return (
		<section>
			이곳은 메인입니다.
			<Link to="/test">시작하기</Link>
		</section>
	)
}
export default  Home;
