import React, {useEffect, useState} from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import { useNavigate, json } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import "../css/global.css";

// IMPORT DES IMAGES :
import homeWhiteMode from "../assets/whiteMode/homeWhiteMode.svg";
import homeWhiteModeChecked from "../assets/whiteMode/homeWhiteModeChecked.svg";
import plusWhiteMode from "../assets/whiteMode/plusWhiteMode.svg";
import plusWhiteModeChecked from "../assets/whiteMode/plusWhiteModeChecked.svg";
import heartWhiteMode from "../assets/whiteMode/heartWhiteMode.svg";
import heartWhiteModeChecked from "../assets/whiteMode/heartWhiteModeChecked.svg";
import wiveWhiteMode from "../assets/whiteMode/wiveWhiteMode.svg";
import wiveCenterWhiteMode from "../assets/whiteMode/wiveCenterWhiteMode.svg";


function Place()
{
	const [markers, setMarkers] = useState([]);
	const icon = new L.Icon({
		iconUrl: require("../assets/location.png"),
		iconRetinaUrl: require("../assets/location.png"),
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

	const navigate = new useNavigate()
	return (
		<div>

            {/* <div class="searchBar"><input type="text" placeholder="cherchez un lieu" /><img src={wiveCenterWhiteMode} /></div> */}

			<MapContainer
				style={{height: (window.innerHeight/100)*91}} // map prend 89% de la page
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

			<div class="footer">
				<button class="footerButton" onClick={()=>{navigate('/Place')}} ><img src={homeWhiteModeChecked}/></button>
				<button class="footerButton" onClick={()=>{navigate('/AddCamera')}} ><img src={plusWhiteMode}/></button>
				<button class="footerButton" onClick={()=>{navigate('/')}} ><img src={wiveWhiteMode}/></button>
				<button class="footerButton" onClick={()=>{navigate('/')}} ><img src={heartWhiteMode}/></button>
			</div>
		</div>
	);
}

export default Place;
