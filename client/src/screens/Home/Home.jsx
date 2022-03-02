import React, { useState } from "react";
import useStyles from "./components/styles";
import { Divider, Grid, Typography } from "@mui/material";
import HomeCard from "./components/HomeCard/HomeCard";
import WorldCard from "./components/WorldCard/WorldCard";
import { useTheme } from "@emotion/react";
import StatisticsCard from "./components/StatisticsCard/StatisticsCard";

const Home = () => {
	const classes = useStyles();
	const theme = useTheme();
	const [stats, setStats] = useState();
	return (
		<>
			<div className={classes.mainContainer}>
				<WorldCard />
				<Grid>
					
				</Grid>

			</div>
		</>
	);
};

export default Home;
