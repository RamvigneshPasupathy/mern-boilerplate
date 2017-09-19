import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './components/App.jsx';
import './styles/index.css';

injectTapEventPlugin();

render(
  <MuiThemeProvider>
  <Router>
      <div>
          <Route exact path= '/' component={App}/>
      </div>
  </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
