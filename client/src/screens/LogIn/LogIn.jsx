import React from "react";
import useStyles from "./components/styles";
import LogInCard from "./components/LogInCard";
import { Container } from "@mui/material";

const LogIn = () => {
	const classes = useStyles();

	return (
		<>
			<div className={classes.mainContainer}>
				<LogInCard />
			</div>
		</>
	);
};

export default LogIn;
