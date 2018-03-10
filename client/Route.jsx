import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './components/App.jsx';
import 'semantic-ui-css/semantic.min.css';
import './styles/index.css';

render(
  <Router>
    <div>
      <Route exact path= '/' component={App}/>
    </div>
  </Router>,
  document.getElementById('root')
);
