import * as React from 'react';
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './routes/Home'
import Test from './routes/Test';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';

function App() {
  return (
    <Body className="App">
		<BrowserRouter>
			<Switch>
			<Route exact path="/" component={Home}/>
			<Route path="/test" component={Test}/>
			<Redirect path="*" to="/" />
			</Switch>
		</BrowserRouter>
    </Body>
  );
}

export default App;

const Body = styled.div`
	width: 100%;
	@media only screen and (min-width: 1200px) {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2%;
	}
`
