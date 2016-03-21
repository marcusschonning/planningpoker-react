import React from 'react';
import ReactRouter from 'react-router';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Home from '../components/Home';
import Base from '../components/Base';
import RevealPageContainer from '../containers/RevealPageContainer';

let Routes = () => {
	return(
		<Router history={hashHistory}>
			<Route path='/' component={Base}>
				<IndexRoute component={Home} />
				<Route path='/reveal' component={RevealPageContainer} />
			</Route>
		</Router>
	)
}


export default Routes
