import React from "react";
import useStyles from "./components/styles";
import { Typography } from "@mui/material";
import InfoCard from './components/InfoCard/InfoCard';
import StatisticsCard from './components/StatisticsCard/StatisticsCard';
import NewsCard from './components/NewsCard/NewsCard';
import CommunityCard from './components/CommunityCard/CommunityCard';

const cards = () => {
	let cards = [];
	while (true) {
		let card;
		let randCard;
		let randType;
		let randColor;
		switch (randCard) {
			case 1:
				{
					card = <StatisticsCard
						type={ }
						color={ }
					/>
					break;
				}
			case 1:
				{
					card = <NewsCard
						type={ }
						color={ }
					/>
					break;
				}
			case 1:
				{
					<CommunityCard
						type={ }
						color={ }
					/>
					break;
				}
			default:
				{
					break;
				}
		};
	};
};

const Home = () => {
	const classes = useStyles();
	return (
		<>
			<div className={classes.mainContainer}>
				<Typography variant="h4" color="initial">
					Home
				</Typography>
				<InfoCard
					type={ }
					color={ }
					
				/>
				<StatisticsCard
					type={ }
					color={ }
				/>
				{ cards }
			</div>
		</>
	);
};

export default Home;
