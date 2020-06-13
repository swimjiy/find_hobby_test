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
			<h1>나에게 어울리는<br/>집콕 취미생활 찾기</h1>
			<p>내 취미 유형과 집에서 200% 즐기는 방법을 알아봅시다!</p>
			<Link to="/test">테스트 시작하기</Link>
		</section>
	)
}
export default  Home;
