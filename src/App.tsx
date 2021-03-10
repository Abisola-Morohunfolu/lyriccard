import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { GlobalStyles } from './globalStyle';

import './App.css';
import Home from './components/Home/Home';
import CreateCard from './components/CreateCard/CreateCard';
import { AnimatePresence } from 'framer-motion';

function App() {
	const location = useLocation();
	return (
		<>
			<GlobalStyles />
			<Route
				render={() => (
					<AnimatePresence exitBeforeEnter>
						<Switch location={location} key={location.pathname}>
							<Route exact path="/" component={Home} />
							<Route exact path="/create" component={CreateCard} />
						</Switch>
					</AnimatePresence>
				)}
			/>

			{/* <AnimatePresence initial={false} exitBeforeEnter> */}

			{/* </AnimatePresence> */}
		</>
	);
}

export default App;
