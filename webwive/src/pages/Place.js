import React, { useEffect } from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet"
import "leaflet/dist/leaflet.css";

function Place() {
	const iconPerson = new L.Icon({
		iconUrl: require("../../public/logo512.png"),
		iconRetinaUrl: require("../../public/logo512.png"),
		iconAnchor: null,
		popupAnchor: null,
		shadowUrl: null,
		shadowSize: null,
		shadowAnchor: null,
		iconSize: new L.Point(75, 75),
		className: 'leaflet-div-icon'
	});

	return (
		<div>
			<MapContainer style={{height:"100em"}} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker icon={iconPerson} position={[51.505, -0.09]}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</MapContainer>
		</div>
	);
}

export default Place;
