import * as React from 'react';

interface TempProps {

}

export default class Temp extends React.Component<TempProps> {
	render() {
		return (
			<section>
				hi Temp!
			</section>
		)
	}
}


// import * as React from 'react';

// interface HomeProps {
// 	value: String;
// 	onClick(): void;
// }

// export default function Home(props: HomeProps): JSX.Element {
// 	return (
// 		<button className="square" onClick={() => props.onClick()}>
// 			{props.value}
// 		</button>
// 	)
// }
// import * as React from 'react';
// import Square from './Square';

// interface BoardProps {
// 	squares: Array<string>;
// 	onClick(i: number): void;
// }
// interface BoardState {

// }

// export default class Board extends React.Component<BoardProps, BoardState> {
// 	renderSquare(i: number): JSX.Element {
// 		const square = this.props.squares;
// 		return <Square value={square[i]} onClick={() => this.props.onClick(i)}/>
// 	}
// 	render(): JSX.Element {
// 		return (
// 			<div>

// 			</div>
// 		);
// 	}
// }
// import * as React from 'react';
// import Board from './Board';

// interface GameProps {

// }
// interface GameState {
// 	history: Array<{squares: Array<string>}>;
// 	stepNumber: number;
// 	xIsNext: boolean
// }

// export default class Game extends React.Component<GameProps, GameState> {
// 	constructor() {
// 		super();
// 		this.state = {
// 			history: [{
// 				squares: Array(9).fill(null);
// 			}],
// 			stepNumber: 0,
// 			xIsNext: true,
// 		}
// 	}
// 	render() {
// 		const history: number = this.state.history;
// 	}
// }

