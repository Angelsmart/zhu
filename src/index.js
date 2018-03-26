import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import Page from './components/link/page';
import App from './components/link/app';
import apartment from './components/link/Apartment';
import Short from './components/link/Short';
import Recruit from './components/link/recruit';
import Brand from './components/link/brand';
import Foots from './components/client/foots.js';


import { Switch,HashHistory,BrowserRouter as Router,Route} from 'react-router-dom';

// Render the main component into the dom
ReactDOM.render(
	<Router>
	    <div>
	       <Route  path="/" component={Main} />
	       <Route exact path="/" component={Page} />
	       <Route  path="/App" component={App} />
	       <Route  path="/apartment" component={apartment} />
	       <Route  path="/Short" component={Short} />
	       <Route  path="/Recruit" component={Recruit} />
	       <Route  path="/Brand" component={Brand} />
	       <Foots />
		</div>
	</Router>, 
	document.getElementById('app'));
