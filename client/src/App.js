import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom';

const App = () => {
	return (
		<BrowserRouter>
			<div>
				<BottomNavigation />
				<Switch>
					<Route exact path ='/' component={Home}/>
					<Route exact path ='/Calculator' component={Calculator}/>
					<Route exact path ='/News' component={News}/>
					<Route exact path ='/Community' component={Community}/>
					<Route exact path ='/Learn' component={Learn}/>
					<Route exact path ='/Settings' component={Settings}/>
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default App
