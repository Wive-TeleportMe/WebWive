import React, {useEffect, useState} from "react";
import {MapContainer, Marker, Popup, TileLayer, useMap} from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import {json} from "react-router-dom";

function Place()
{
	const [markers, setMarkers] = useState([]);
	const icon = new L.Icon({
		iconUrl: require("../../public/location.png"),
		iconRetinaUrl: require("../../public/location.png"),
		iconAnchor: null,
		popupAnchor: [1, -15],
		shadowUrl: null,
		shadowSize: null,
		shadowAnchor: null,
		iconSize: new L.Point(35, 45),
		className: 'location-icon'
	});

	let url = "http://localhost:3001/camerasList?pageSize=1000&page=1";
	useEffect(() =>
	{
		fetch(url)
			.then((response) => response.json())
			.then((data) =>
			{
				const newMarkers = data.map((item) => (
					<Marker key={item.id} icon={icon} position={[item.latitude, item.longitude]} eventHandlers={{
							click: () =>
							{
								console.log(item.url + " =//> " + item.format);
							}
						}}
					>
						<Popup>
							<div>
								<a href={item.url} target="_blank">{item.name}</a><br/>
								<img src={item.url} style={{ width: '20em' }}  alt="preview"/>
							</div>
						</Popup>
					</Marker>
				));
				setMarkers(newMarkers);
			})
			.catch((error) =>
			{
				console.error("Error:", json(error));
			});
	}, []);

	scroll()

	return (
		<div>
			<MapContainer
				style={{height: window.innerHeight}}
				center={[33.53016, -86.85018]}
				zoom={3}
				scrollWheelZoom={true}
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
