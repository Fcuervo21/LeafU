import React from "react";
import useStyles from "./components/styles";
import { Divider, Typography } from "@mui/material";
import HomeCard from "./components/HomeCard/HomeCard";
import WorldCard from "./components/WorldCard/WorldCard";
import { useTheme } from "@emotion/react";

const Home = () => {
	const classes = useStyles();
	const theme = useTheme();
	/* const newsCardsData;
	const statisticsCardsData;
	const communityCardsData; */
	return (
		<>
			<div className={classes.mainContainer}>
				<HomeCard>
					<Typography variant="h4" color="primary">My World</Typography>
					<Divider  color="primary" />
					<WorldCard />
				</HomeCard>

			</div>
		</>
	);
};

export default Home;
