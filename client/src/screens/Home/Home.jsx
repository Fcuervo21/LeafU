import React, { useState } from "react";
import useStyles from "./components/styles";
import { Grid, Paper } from "@mui/material";
import WorldCard from "./components/WorldCard/WorldCard";
import { useTheme } from "@emotion/react";
import StatisticsCard from "./components/StatisticsCard/StatisticsCard";
import { faker } from '@faker-js/faker'
import {
	Chart as ChartJS,
	LinearScale,
	CategoryScale,
	BarElement,
	PointElement,
	LineElement,
	Legend,
	Tooltip,
} from 'chart.js';

const Home = () => {
	const theme = useTheme();
	const classes = useStyles();
	const [stats, setStats] = useState();

	ChartJS.register(
		LinearScale,
		CategoryScale,
		BarElement,
		PointElement,
		LineElement,
		Legend,
		Tooltip
	);

	const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

	// WATER DATA
	const waterDataset = {
		type: 'line',
		label: 'Water',
		borderColor: '#1F64F1',
		borderWidth: 2,
		fill: true,
		data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
	}
	
	const waterMeanDataset = (type) => {
		return (
			{
				type: {type},
				label: 'Water Mean',
				borderColor: '#1F64F1',
				borderWidth: 2,
				fill: true,
				data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
			}
		)
	} 

	const waterData = {
		labels,
		datasets: [
			waterDataset
		],
	};

	// GAS DATA
	const gasDataset = {
		type: 'line',
		label: 'Gas',
		borderColor: '#F15C1F',
		borderWidth: 2,
		fill: false,
		data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
	}

	const gasData = {
		labels,
		datasets: [
			gasDataset
		],
	};

	// ELECTRICITY DATA
	const electricityDataset = {
		type: 'line',
		label: 'Electricity',
		borderColor: '#1FF15A',
		borderWidth: 2,
		fill: false,
		data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
	}

	const electricityData = {
		labels,
		datasets: [
			electricityDataset
		],
	};

	// ENERGY DATA
	const energyDataset = {
		type: 'line',
		label: 'Energy',
		borderColor: '#F1E41F',
		borderWidth: 2,
		fill: false,
		data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
	}

	const energyData = {
		labels,
		datasets: [
			energyDataset
		],
	};

	// WEEKLY REPORTS DATA
	const weeklyReportsData = {
		labels,
		datasets: [
			waterDataset,
			gasDataset,
			electricityDataset,
			energyDataset
		],
	};

	const waterMeanComparassionData = {
		labels,
		datasets: [
			waterDataset,
			waterMeanDataset
		],
	}

	return (
		<Paper className={classes.mainContainer}>
			<Grid container spacing={3}>
				<Grid className={classes.worldCard} item xs={12} md={12} lg={4}>
					<WorldCard />
				</Grid>
				<Grid item xs={12} md={6} lg={4}>
					<StatisticsCard title="Weekly Reports" chartData={weeklyReportsData} />
				</Grid>
				<Grid item xs={12} md={6} lg={4}>
					<StatisticsCard title="Water Expenses" chartData={waterData} />
				</Grid>
				<Grid item xs={12} md={6} lg={4}>
					<StatisticsCard title="Gas Expenses" chartData={gasData} />
				</Grid>
				<Grid item xs={12} md={6} lg={4}>
					<StatisticsCard title="Electricity Expenses" chartData={electricityData} />
				</Grid>
				<Grid item xs={12} md={6} lg={4}>
					<StatisticsCard title="Energy Expenses" chartData={energyData} />
				</Grid>
				<Grid item xs={12} md={6} lg={4}>
					<StatisticsCard title="Water Mean Comparassion" chartData={waterMeanComparassionData} />
				</Grid>
				<Grid item xs={12} md={6} lg={4}>
					<StatisticsCard title="Gas Mean Comparassion" chartData={gasData} />
				</Grid>
				<Grid item xs={12} md={6} lg={4}>
					<StatisticsCard title="Electricity Mean Comparassion" chartData={electricityData} />
				</Grid>
				<Grid item xs={12} md={6} lg={4}>
					<StatisticsCard title="Energy Mean Comparassion" chartData={energyData} />
				</Grid>
			</Grid>
		</Paper>
	);
};

export default Home;
