import React from "react";
import { Avatar, AppBar, Toolbar, IconButton } from "@mui/material";
import useStyles from "./styles";
import Logo from "../../assets/images/LogoMiniWhite.png";
import { withRouter } from "react-router-dom";

export const TopTittle = (props) => {
	const { history, location } = props;
	const classes = useStyles();
	return (
		<>
			<AppBar position="static" color="primary">
				<Toolbar className={classes.toolContainer}>
					<IconButton onClick={() => history.push("/")}>
						<Avatar alt="Logo" src={Logo} />
					</IconButton>
					<Avatar>W</Avatar>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default withRouter(TopTittle);
