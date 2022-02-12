import React from "react";
import useStyles from "./styles";
import TopTittle from "../../navigation/TopTittle/TopTittle";
import { Typography } from "@mui/material";

const Home = () => {
	const classes = useStyles();
	return (
		<>
			<TopTittle route="Home" />
			<div className={classes.mainContainer}>
				<div className={classes.contentContainer}>
					<Typography variant="h4" color="initial">
						Home
					</Typography>
				</div>
			</div>
		</>
	);
};

export default Home;
