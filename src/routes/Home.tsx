import * as React from 'react';
import { Link } from 'react-router-dom';

interface HomeProps {

}

export default class Home extends React.Component<HomeProps> {
	render() {
		return (
			<section>
				심리테스트를 시작해봅시다..!
				<Link to="/test">시작하기</Link>
			</section>
		)
	}
}
