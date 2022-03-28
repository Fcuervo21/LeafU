import { React } from "react";
import useStyles from "./styles";
import {
	Card,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	Button,
	Box
} from "@mui/material";

const StoresCard = (props) => {
	const classes = useStyles();

	const openLink = () => {
		window.open(props.link);
	};
	return (
		<div className={classes.cardContainer}>
			<Card sx={{ display: "flex" }}>
				<Box sx={{ display: "flex", flexDirection: "row" }}>
					<CardMedia
						component="img"
						height="180"
						image={props.image}
					/>
					<Box sx={{ display: "flex", flexDirection: "column" }}>
						<CardContent>
							<Typography gutterBottom variant="h5">
								{props.title}
							</Typography>
							<Typography variant="body2">
								{props.content}
							</Typography>
						</CardContent>
						<CardActions>
							<Button
								size="small"
								color="primary"
								onClick={openLink}
							>
								Contact
							</Button>
						</CardActions>
					</Box>
				</Box>
			</Card>
		</div>
	);
};

export default StoresCard;
