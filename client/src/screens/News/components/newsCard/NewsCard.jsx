import React, { useState } from "react";
import { useSelector } from "react-redux";
import useStyles from "./styles";
import {
	Card,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	Button,
	Alert,
	Dialog,
	Snackbar,
} from "@mui/material";

const NewsCard = (props) => {
	const vertical = "top";
	const horizontal = "center";

	const [open, setOpen] = useState(false);
	const classes = useStyles();

	const handleClick = () => {
		navigator.clipboard.writeText(props.link);
		setOpen(true);
	};

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setOpen(false);
	};

	const openLink = () => {
		window.open(props.link);
	};

	return (
		<div className={classes.cardContainer}>
			<Card>
				<CardMedia component="img" height="140" image={props.image} />
				<CardContent>
					<Typography gutterBottom variant="h5">
						{props.title}
					</Typography>
					<Typography variant="body2">{props.content}</Typography>
				</CardContent>
				<CardActions>
					<Button size="small" color="primary" onClick={handleClick}>
						Share
					</Button>
					<Snackbar
						anchorOrigin={{ vertical, horizontal }}
						open={open}
						autoHideDuration={5000}
						onClose={handleClose}
						style={{ marginTop: "57px" }}
					>
						<Alert
							onClose={handleClose}
							severity="success"
							sx={{ width: "100%" }}
						>
							Text copied to clipboard!
						</Alert>
					</Snackbar>
					<Button size="small" color="primary" onClick={openLink}>
						Learn More
					</Button>
				</CardActions>
			</Card>
		</div>
	);
};

export default NewsCard;
