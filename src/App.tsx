import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { GlobalStyles } from './globalStyle';

import './App.css';
import Home from './components/Home/Home';

function App() {
	return (
		<>
			<GlobalStyles />
			<Switch>
				<Route exact path="/" component={Home} />
			</Switch>
		</>
	);
}

export default App;
