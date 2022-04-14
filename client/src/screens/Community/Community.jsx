import React from "react";
import MapConfiguration from "./components/MapConfiguration";
import StoresCard from "./components/StoresCard";
import useStyles from "./components/styles";
import locations from "../../assets/locations.json";

const Community = () => {
	const classes = useStyles();
	return (
		<div className={classes.mainContainer}>
			<MapConfiguration />
			{locations["city"]["puebla"].map((item, index) => {
				return (
					<StoresCard
						key={item.name}
						title={item.name}
						image={item.img}
						content={item.direction}
						link={item.contact}
					/>
				);
			})}
		</div>
	);
};

export default Community;
