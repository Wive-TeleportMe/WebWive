import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/global.css";
import "../css/Home.css";

// IMPORT DES IMAGES :
import wiveLogoTitre from "../assets/Clip path group.png";


function Home()
{
	const navigate = new useNavigate()

	return (

		<div id="body">
			<div className="iconContainerSpace"></div>

            <h2 style={{textAlign: "center", margin: "10px"}}>Bienvenue sur</h2>
			<h1 className="menuTitre" style={{marginTop: "0"}}>Wive!</h1>

			<div style={{textAlign: "center"}}><img src={wiveLogoTitre} style={{maxHeight: "36", maxWidth: "36", }}/></div>
			<br/><br/>

			<div className="homeButton"><button onClick={()=>navigate('/Login')}>Se connecter avec Google</button></div>

			<div className="homeButton"><button onClick={()=>navigate('/Signin')}>Créer un compte</button></div>

			<div className="homeButton"><button onClick={()=>navigate('/globalPage?page=Place')}>Continuer en tant qu'invité</button></div>
        </div>
	);
};

export default Home;