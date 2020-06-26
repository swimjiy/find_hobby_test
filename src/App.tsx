import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './routes/Home'
import QuestionPage from './routes/QuestionPage';
import ResultPage from './routes/ResultPage';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function App() {
  return (
	  <BrowserRouter>
			<Route render={({ location }) => {
				return (
					<Body className="App">
						<TransitionGroup component={null}>
							<CSSTransition
								timeout={300}
								classNames="page"
								key={location.key}
							>
								<Switch location={location}>
									<Route exact path="/" component={Home}/>
									<Route path="/question" component={QuestionPage}/>
									<Route path="/result/:id" component={ResultPage}/>
									<Redirect path="*" to="/" />
								</Switch>
							</CSSTransition>
						</TransitionGroup>
					</Body>
				)
			}} />
		</BrowserRouter>
  );
}

export default App;

const Body = styled.div`
	width: 100%;
	.page-enter {
		opacity: 0.01;
	}
	.page-enter.page-enter-active {
		opacity: 1;
		transition: opacity 300ms ease-in;
	}
	.page-exit {
		opacity: 1;
	}
	.page-exit.page-exit-active {
		opacity: 0.01;
		transition: opacity 300ms ease-in;
	}
	@media only screen and (min-width: 1200px) {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2%;
	}
`
