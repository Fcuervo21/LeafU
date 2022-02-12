import React from "react";
import { Avatar, Paper, Typography } from "@mui/material";
import useStyles from "./styles";
import Logo from "../../assets/images/LogoMiniWhite.png";

export const TopTittle = ({ route }) => {
	const classes = useStyles();
	return (
		<>
			<Paper className={classes.mainPaper} elevation={1} square>
				<Typography variant="h3">{route}</Typography>
				<Avatar alt="Logo" src={Logo} />
			</Paper>
		</>
	);
};

export default TopTittle;
