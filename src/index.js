import React from 'react';
import ReactDOM from 'react-dom';

import Home from './Components/Header';
import Whoops from './Components/Whoops404';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import './index.css';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
  <Router>
   <div>
     <ul>
       <li><Link to="/">Home</Link></li>
       <li><Link to="/header">Header</Link></li>
     </ul>

     <hr/>

     <Route exact path="/" component={Home}/>
     <Route path="/header" component={Whoops}/>
   </div>
 </Router>
  , document.getElementById('root'));
registerServiceWorker();
