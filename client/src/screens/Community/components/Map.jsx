import { React, useState } from "react";
import {
	GoogleMap,
	withScriptjs,
	withGoogleMap,
	Marker,
} from "react-google-maps";

import locations from "../../../assets/locations.json";

const Map = () => {
	const refs = {
		map: undefined,
	};
	const onMapMounted = (ref) => {
		refs.map = ref;
	};
	const [zoom, setzoom] = useState(1);
	const [latitude, setlatitude] = useState(24.225395681358375);
	const [longitude, setlongitude] = useState(-102.30212341314778);
	navigator.geolocation.getCurrentPosition((position) => {
		setlatitude(position.coords.latitude);
		setlongitude(position.coords.longitude);
	});

	return (
		<>
			<GoogleMap
				ref={onMapMounted}
				zoom={zoom}
				defaultCenter={{
					lat: 24.225395681358375,
					lng: -102.30212341314778,
				}}
				onTilesLoaded={() => {
					refs.map.panTo({
						lat: latitude,
						lng: longitude,
					});
					setzoom(13);
				}}
			>
            {locations["city"]["puebla"].map((item, index) => {
				return (
                    <Marker key={item.name} position={{ lat: item.latitude, lng: item.longitude }} label={item.name}/>
				);
			})}
			</GoogleMap>
		</>
	);
};

export default withScriptjs(withGoogleMap(Map));
