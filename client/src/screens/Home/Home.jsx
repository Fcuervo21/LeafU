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

	const data = {
		water:  labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
		gas:  labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
		electricity:  labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
		energy:  labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
	}

	const colors = {
		water: "#1F64F1",
		waterMean: "#093388",
		gas: "#E9664F",
		gasMean: "#821C0A",
		electricity: "#E1E334",
		electricityMean: "#90910B",
		energy: "#45E334",
		energyMean: "#18820C",
	}

	// WATER DATA
	const waterDataset = (type, color) => {
		return (
			{
				type: type,
				label: 'Water',
				borderColor: color,
				borderWidth: 2,
				data:data.water,
			}
		)
	}

	const waterMeanDataset = (type, color) => {
		return (
			{
				type: type,
				label: 'Water Mean',
				borderColor: color,
				borderWidth: 2,
				data: data.gas,
			}
		)
	}

	const waterData = {
		labels,
		datasets: [
			waterDataset("doughnut", colors.water)
		],
	};

	// GAS DATA
	const gasDataset = (color) => {
		return (
			{
				label: 'Gas',
				borderColor: color,
				borderWidth: 2,
				fill: true,
				data: data.electricity,
			}
		)
	}

	const gasMeanDataset = (color) => {
		return (
			{
				label: 'Gas Mean',
				borderColor: color,
				borderWidth: 2,
				fill: true,
				data: data.energy,
			}
		)
	}

	const gasData = {
		labels,
		datasets: [
			gasDataset(colors.gas)
		],
	};

	// ELECTRICITY DATA
	const electricityDataset = (type, color) => {
		return (
			{
				type: type,
				label: 'Electricity',
				borderColor: color,
				borderWidth: 2,
				fill: true,
				data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
			}
		)
	}

	const electricityMeanDataset = (type, color) => {
		return (
			{
				type: type,
				label: 'Electricity Mean',
				borderColor: color,
				borderWidth: 2,
				fill: true,
				data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
			}
		)
	}

	const electricityData = {
		labels,
		datasets: [
			electricityDataset("line", colors.electricity)
		],
	};

	// ENERGY DATA
	const energyDataset = (type, color) => {
		return (
			{
				type: type,
				label: 'Energy',
				borderColor: color,
				borderWidth: 2,
				fill: true,
				data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
			}
		)
	}

	const energyMeanDataset = (type, color) => {
		return (
			{
				type: type,
				label: 'Energy Mean',
				borderColor: color,
				borderWidth: 2,
				fill: true,
				data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
			}
		)
	}

	const energyData = {
		labels,
		datasets: [
			energyDataset("line", colors.energy)
		],
	};
	// WEEKLY REPORTS DATA
	const weeklyReportsData = {
		labels,
		datasets: [
			waterDataset("line", colors.water),
			gasDataset(colors.gas),
			electricityDataset("line", colors.electricity),
			energyDataset("line", colors.energy)
		],
	};

	const waterMeanComparassionData = {
		labels,
		datasets: [
			waterDataset("bar", colors.water),
			waterMeanDataset("bar", colors.waterMean)
		],
	}

	const gasMeanComparassionData = {
		labels,
		datasets: [
			gasDataset(colors.gas),
			gasMeanDataset("bar", colors.gasMean)
		],
	}

	const electricityMeanComparassionData = {
		labels,
		datasets: [
			electricityDataset("bar", colors.electricity),
			electricityMeanDataset("bar", colors.electricityMean)
		],
	}

	const energyMeanComparassionData = {
		labels,
		datasets: [
			energyDataset("bar", colors.energy),
			energyMeanDataset("bar", colors.energyMean)
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
					<StatisticsCard title="Gas Expenses" cha chartData={gasData} />
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
					<StatisticsCard title="Gas Mean Comparassion" chartData={gasMeanComparassionData} />
				</Grid>
				<Grid item xs={12} md={6} lg={4}>
					<StatisticsCard title="Electricity Mean Comparassion" chartData={electricityMeanComparassionData} />
				</Grid>
				<Grid item xs={12} md={6} lg={4}>
					<StatisticsCard title="Energy Mean Comparassion" chartData={energyMeanComparassionData} />
				</Grid>
			</Grid>
		</Paper>
	);
};

export default Home;
