import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "../css/GlobalPage.css";

// IMPORT DES IMAGES :
import wiveLogoTitre from "../assets/whiteMode/wiveLogoTitre.svg";

import homeWhiteMode from "../assets/whiteMode/homeWhiteMode.svg";
import homeWhiteModeChecked from "../assets/whiteMode/homeWhiteModeChecked.svg";
import plusWhiteMode from "../assets/whiteMode/plusWhiteMode.svg";
import plusWhiteModeChecked from "../assets/whiteMode/plusWhiteModeChecked.svg";
import heartWhiteMode from "../assets/whiteMode/heartWhiteMode.svg";
import heartWhiteModeChecked from "../assets/whiteMode/heartWhiteModeChecked.svg";
import wiveWhiteMode from "../assets/whiteMode/wiveWhiteMode.svg";
import wiveCenterWhiteMode from "../assets/whiteMode/wiveCenterWhiteMode.svg";

function AddCamera()
{

    const [searchParams] = useSearchParams()
    let paramPage = searchParams.get("page")
    if (paramPage == null || paramPage == '' ) {
        paramPage = 'Place'
    }

    let urlOrigin = window.location.origin


    const navigate = new useNavigate() 
	return (
		<div id="body">

            {/* Icone principale + icone de paramêtre (quasiment) */}
            <div className="iconContainer">
                <img src={wiveLogoTitre} /> 
				<div id="param" className="paramIcon" onClick={(event)=>toggleMenuParam()}><div className="bar1"></div><div className="bar2"></div><div className="bar3"></div></div>
			</div>

            {/* Menu de paramêtre*/}
            <div id="menuContainer" className="menuContainer changeMenuContainerFermeture">
                <div className="iconContainerSpace"></div>
                <h3>Menu</h3>
                <div>Profil</div>
                <div>Langues</div>
                <div>Paramètres de confidentialité</div>
                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider"></span>
                </label>
                <div>Mode sombre</div>
            </div>

            {/* "Ecran" surlequel s'affiche les autres pages */}
            <iframe id='iframeShownPage' src={urlOrigin + '/' + paramPage} frameBorder="0"></iframe>

            {/* Le pied de page (les boutons pour aller de page en page) */}
            <div className="footer">
				<button className="footerButton" onClick={()=>{navigate('/globalPage?page=Place')}} ><img src={paramPage=='Place' ? homeWhiteModeChecked : homeWhiteMode}/></button>
				<button className="footerButton" onClick={()=>{navigate('/globalPage?page=AddCamera')}} ><img src={paramPage=='AddCamera' ? plusWhiteModeChecked : plusWhiteMode}/></button>
				<button className="footerButton" onClick={()=>{navigate('/globalPage?page=ChooseCamera')}} ><img src={paramPage=='ChooseCamera' ? wiveWhiteMode + wiveCenterWhiteMode : wiveWhiteMode}/></button>
				<button className="footerButton" onClick={()=>{navigate('/globalPage?page=FavoriteCamera')}} ><img src={paramPage=='FavoriteCamera' ? heartWhiteModeChecked : heartWhiteMode}/></button>
			</div>
		</div>
	);
};


function toggleMenuParam(){
    console.log("aaa")
    let elementParam = document.getElementById("param")
    if (elementParam != null){
        elementParam.classList.toggle("change")
    }

    let elementMenuContainer = document.getElementById("menuContainer")
    if (elementMenuContainer != null){
        elementMenuContainer.classList.toggle("changeMenuContainerOuverture")
        elementMenuContainer.classList.toggle("changeMenuContainerFermeture")
    }
}

export default AddCamera;