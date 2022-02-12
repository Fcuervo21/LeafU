import React from "react";
import useStyles from "./components/styles";
import { Typography } from "@mui/material";

const Home = () => {
	const classes = useStyles();
	return (
		<>
			<div className={classes.mainContainer}>
				<Typography variant="h4" color="initial">
					Home
				</Typography>
			</div>
		</>
	);
};

export default Home;
