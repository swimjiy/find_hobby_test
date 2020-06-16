import * as React from 'react';
import styled from 'styled-components';

interface GraphProps {
	step: number;
}

interface IGraphInner {
	width: number;
}

const Graph: React.SFC<GraphProps> = ({ step }) => {
	let steps = Math.floor(step / 15 * 100);
	return (
		<StyledGraph><GraphInner width={steps}></GraphInner></StyledGraph>
	)
}

export default Graph;

const StyledGraph = styled.div `
	width: 90%;
	height: 0.983em;
	margin: 0 auto 5em;
	border-radius: 2em;
	background-color: #F8F8F8;
`
const GraphInner = styled.div `
	width: ${(props:IGraphInner) => props.width}%;
	height: 100%;
	margin-bottom: 1em;
	border-radius: 2em;
	background-color: #3F39E0;
	transition: all 0.5s ease-in;
`
