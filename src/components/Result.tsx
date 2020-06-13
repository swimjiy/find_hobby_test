import * as React from 'react';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

interface ResultProps {
	stepNumber?: number;
	type: number;
}

interface ResultState {
	resultList: Array<string>;
}

interface Results {
	id: number;
	subTitle: string;
	title: string;
	description: string;
}
interface IresultList {
	id: number;
	subTitle: string;
	title: string;
	description: string;
}

const Result: React.FC<ResultProps> = (props) => {
	const [resultList, setResultList] = useState<IresultList | any>([]);
	const type = props.type ? props.type : -1;
	const fetchResults = async (): Promise<Array<Results> | undefined> => {
		const api = `data/QuestionResult.json`;
		try {
			const response = await fetch(api);
			const data = await response.json();
			setResultList(data.questionResult[type]);
			return data;
		} catch (error) {
			console.log(error);
			return error.message;
		}
	}
	useEffect(() => {
		if (type >= 0)
			fetchResults();
	}, [type])
	return (
		<section>
			{resultList &&
				<section>
					<h2>나의 집콕 유형은</h2>
					<span>{resultList.subTitle}</span>
					<h3>{resultList.title}</h3>
					<div>
						<p>{resultList.description}</p>
						<div>
							<h4>집콕으로 200% 즐기기</h4>
						</div>
						<div>
							<h4>테스트 공유하기</h4>
							<button>카카오톡 공유</button>
							<button>페이스북 공유</button>
							<button>트위터 공유</button>
							<button>url 공유</button>
						</div>
						<Link to="/">테스트 다시하기</Link>
					</div>
				</section>
			}
		</section>
	)
}
export default Result;
