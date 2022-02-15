import React, { useContext } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { useDispatch } from 'react-redux';
import TopTittle from "./navigation/TopTittle/TopTittle";
import BottomNavigation from "./navigation/BottomNavigation/BottomNavigation";
import Home from "./screens/Home/Home";
import Calculator from "./screens/Calculator/Calculator";
import Community from "./screens/Community/Community";
import News from "./screens/News/News";
import Learn from "./screens/Learn/Learn";

import { ColorModeContext } from "./assets/toggleColorMode";
import { useTheme } from "@mui/material/styles";

const App = () => {
	const theme = useTheme();


	const colorMode = useContext(ColorModeContext);
	return (
		<BrowserRouter>
			<div>
				<TopTittle />
				<BottomNavigation />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/Calculator" component={Calculator} />
					<Route exact path="/news" component={News} />
					<Route exact path="/Community" component={Community} />
					<Route exact path="/Learn" component={Learn} />
					{/* <Route exact path ='/Settings' component={Settings}/> */}
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default App;
