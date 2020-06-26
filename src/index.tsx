import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import GlobalStyle from './styles/GlobalStyle'

ReactDOM.render(
  <React.StrictMode>
		<GlobalStyle/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
