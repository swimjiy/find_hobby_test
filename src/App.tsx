import * as React from 'react';
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './routes/Home'
import Test from './routes/Test'

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/test" component={Test}/>
          <Redirect path="*" to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
