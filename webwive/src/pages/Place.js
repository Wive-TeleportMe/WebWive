import React, {useEffect, useState} from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet"
import "leaflet/dist/leaflet.css";
import {json} from "react-router-dom";

function Place() {
	const [markers, setMarkers] = useState([]);

	// let url = "http://localhost:3001/cameras";
	// useEffect(() => {
	// 	fetch(url)
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			const newMarkers = data.map((item) => (
	// 				<Marker key={item.id} position={[item.latitude, item.longitude]}>
	// 					<Popup>
	// 						A pretty CSS3 popup. <br /> Easily customizable.
	// 					</Popup>
	// 				</Marker>
	// 			));
	// 			setMarkers(newMarkers);
	// 		})
	// 		.catch((error) => {
	// 			console.error("Error:", json(error));
	// 		});
	// }, []);

	return (
		<div>
			<MapContainer
				style={{ height: window.innerHeight }}
				center={[51.505, -0.09]}
				zoom={13}
				scrollWheelZoom={false}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{markers}
			</MapContainer>
		</div>
	);
}

export default Place;
