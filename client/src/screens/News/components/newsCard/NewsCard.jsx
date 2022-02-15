import React from "react";
import useStyles from "./styles";
import {
	Card,
	CardActionArea,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	Button,
} from "@mui/material";

const NewsCard = (props) => {
	const classes = useStyles();
	return (
		<div className={classes.cardContainer}>
			<Card>
				<CardActionArea>
					<CardMedia
						component="img"
						height="140"
						image={props.image}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5">
							{props.title}
						</Typography>
						<Typography variant="body2">{props.content}</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary">
						Share
					</Button>
					<Button size="small" color="primary">
						Learn More
					</Button>
				</CardActions>
			</Card>
		</div>
	);
};

export default NewsCard;
