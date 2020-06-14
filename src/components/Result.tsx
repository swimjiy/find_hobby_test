import * as React from 'react';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Button from '../components/Button'

interface ResultProps {
	type: number;
}

interface IresultList {
	id: number;
	subTitle: string;
	title: string;
	description: string;
	recommand: Array<Array<number | string>>;
}

const Result: React.FC<ResultProps> = ({ type }) => {
	const [resultList, setResultList] = useState<Partial<IresultList>>({});
	const fetchResults = async (): Promise<Array<IresultList> | undefined> => {
		const api = `data/QuestionResult.json`;
		try {
			const response = await fetch(api);
			const data = await response.json();
			setResultList(data.questionResult[type - 1]);
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
							<ul>
							{resultList.recommand && 
								resultList.recommand.map((item: any) => {
									return (<li>{item.description}</li>)
								})
							}
							</ul>
						</div>
						<div>
							<h4>테스트 공유하기</h4>
							<button>카카오톡 공유</button>
							<button>페이스북 공유</button>
							<button>트위터 공유</button>
							<button>url 공유</button>
						</div>
						<Link to="/">
							<Button>테스트 다시하기</Button>
						</Link>
					</div>
				</section>
			}
		</section>
	)
}

export default Result;
