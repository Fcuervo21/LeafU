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
		water: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
		waterMean: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
		gas: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
		gasMean: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
		electricity: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
		electricityMean: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
		energy: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
		energyMean: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
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
				data: data.water,
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
				data: data.waterMean,
			}
		)
	}

	const waterData = {
		labels,
		datasets: [
			waterDataset("line", colors.water)
		],
	};

	// GAS DATA
	const gasDataset = (type, color) => {
		return (
			{
				type: type,
				label: 'Gas',
				borderColor: color,
				borderWidth: 2,
				data: data.gas,
			}
		)
	}

	const gasMeanDataset = (type, color) => {
		return (
			{
				type: type,
				label: 'Gas Mean',
				borderColor: color,
				borderWidth: 2,
				data: data.gasMean,
			}
		)
	}

	const gasData = {
		labels,
		datasets: [
			gasDataset("line", colors.gas)
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
				data: data.electricity,
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
				data: data.electricityMean,
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
				data: data.energy,
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
				data: data.energyMean,
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
			gasDataset("line", colors.gas),
			/* electricityDataset("line", colors.electricity), */
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
			gasDataset("bar", colors.gas),
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
				<Grid item container spacing={3} xs={12} md={12} lg={5}>
					<Grid className={classes.worldCard} item xs={12} >
						<WorldCard />
					</Grid>
				</Grid>
				<Grid item container spacing={3} xs={12} md={12} lg={7}>
					<Grid item xs={12} md={12} lg={12}>
						<StatisticsCard variant="thick" title="Weekly Reports" chartData={weeklyReportsData} />
					</Grid>
					<Grid item xs={12} md={6} lg={6}>
						<StatisticsCard variant="small" title="Water Expenses" chartData={waterData} />
					</Grid>
					<Grid item xs={12} md={6} lg={6}>
						<StatisticsCard variant="small" title="Gas Expenses" cha chartData={gasData} />
					</Grid>
{/* 					<Grid item xs={12} md={6} lg={6}>
						<StatisticsCard variant="small" title="Electricity Expenses" chartData={electricityData} />
					</Grid> */}
					<Grid item xs={12} md={6} lg={6}>
						<StatisticsCard variant="small" title="Energy Expenses" chartData={energyData} />
					</Grid>
					<Grid item xs={12} md={6} lg={6}>
						<StatisticsCard variant="small" title="Water Mean Comparassion" chartData={waterMeanComparassionData} />
					</Grid>
					<Grid item xs={12} md={6} lg={6}>
						<StatisticsCard variant="small" title="Gas Mean Comparassion" chartData={gasMeanComparassionData} />
					</Grid>
{/* 					<Grid item xs={12} md={6} lg={6}>
						<StatisticsCard variant="small" title="Electricity Mean Comparassion" chartData={electricityMeanComparassionData} />
					</Grid> */}
					<Grid item xs={12} md={6} lg={6}>
						<StatisticsCard variant="small" title="Energy Mean Comparassion" chartData={energyMeanComparassionData} />
					</Grid>
				</Grid>
			</Grid>
		</Paper >
	);
};

export default Home;
