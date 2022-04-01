import { React } from "react";
import Map from "./Map";
import credentials from "../../../credentials";
import useStyles from "./styles";
import { CircularProgress } from "@mui/material";

const MapConfiguration = () => {
	const classes = useStyles();

	return (
		<div>
			<Map
				googleMapURL={credentials.MAPURL}
				containerElement={<div className={classes.mapContainer} />}
				mapElement={<div className={classes.mapElementContainer} />}
				loadingElement={
					<div className={classes.progressContainer}>
						<CircularProgress color="secondary" />
					</div>
				}
			/>
		</div>
	);
};

export default MapConfiguration;
