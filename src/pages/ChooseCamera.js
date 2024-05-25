import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/global.css";
import "../css/ChooseCamera.css"


// IMPORT DES IMAGES :
import centreCommercial from "../assets/defaultImages/Centre commercial.jpg";
import kilimandjaro from "../assets/defaultImages/Kilimandjaro.jpg";
import montBlanc from "../assets/defaultImages/Mont Blanc.jpg";
import parc from "../assets/defaultImages/Parc.jpg";
import plage from "../assets/defaultImages/Plage.jpg";
import salleDeSport from "../assets/defaultImages/Salle de sport.jpg";
import noImageFound from "../assets/noImageFound.png";

function ChooseCamera()
{
    const navigate = new useNavigate() 
	return (
		<div id="body">
            <div className="iconContainerSpace"></div>
            
            <div className="menuBody">
                <div className="titreMoyen">Découvrez vos alentours</div>
                <ul className="carousel">
                    <li>
                        <input type="checkbox" className="favoriteCheckbox" id="CB-alentours-1"/><label htmlFor="CB-alentours-1"><img className="favoriteHeart"/></label>
                        <img className="chooseCameraImage" src={salleDeSport} /><div>Salle de sport</div>
                    </li>
                    <li>
                        <input type="checkbox" className="favoriteCheckbox" id="CB-alentours-2"/><label htmlFor="CB-alentours-2"><img className="favoriteHeart" /></label>
                        <img className="chooseCameraImage" src={parc} /><div>Parc</div>
                    </li>
                    <li>
                        <input type="checkbox" className="favoriteCheckbox" id="CB-alentours-3"/><label htmlFor="CB-alentours-3"><img className="favoriteHeart" /></label>
                        <img className="chooseCameraImage" src={centreCommercial} /><div>Centre commercial</div>
                    </li>
                    <li>
                        <input type="checkbox" className="favoriteCheckbox" id="CB-alentours-4"/><label htmlFor="CB-alentours-4"><img className="favoriteHeart" /></label>
                        <img className="chooseCameraImage" src={noImageFound} /><div>Caméra4</div>
                    </li>
                    <li>
                        <input type="checkbox" className="favoriteCheckbox" id="CB-alentours-5"/><label htmlFor="CB-alentours-5"><img className="favoriteHeart" /></label>
                        <img className="chooseCameraImage" src={noImageFound} /><div>Caméra5</div>
                    </li>
                </ul>
                <a href="https://google.fr" className="textePetit" style={{float: "right"}}>voir plus</a>
                <br/><br/><br/>

                <div className="titreMoyen">Découvrez les plus beaux paysages</div>
                <ul className="carousel">
                    <li>
                        <input type="checkbox" className="favoriteCheckbox" id="CB-paysages-1"/><label htmlFor="CB-paysages-1"><img className="favoriteHeart" /></label>
                        <img className="chooseCameraImage" src={kilimandjaro} /><div>Kilimandjaro</div>
                    </li>
                    <li>
                        <input type="checkbox" className="favoriteCheckbox" id="CB-paysages-2"/><label htmlFor="CB-paysages-2"><img className="favoriteHeart" /></label>
                        <img className="chooseCameraImage" src={montBlanc} /><div>Mont Blanc</div>
                    </li>
                    <li>
                        <input type="checkbox" className="favoriteCheckbox" id="CB-paysages-3"/><label htmlFor="CB-paysages-3"><img className="favoriteHeart" /></label>
                        <img className="chooseCameraImage" src={plage} /><div>Plage</div>
                    </li>
                    <li>
                        <input type="checkbox" className="favoriteCheckbox" id="CB-paysages-4"/><label htmlFor="CB-paysages-4"><img className="favoriteHeart" /></label>
                        <img className="chooseCameraImage" src={noImageFound} /><div>Caméra4</div>
                    </li>
                    <li>
                        <input type="checkbox" className="favoriteCheckbox" id="CB-paysages-5"/><label htmlFor="CB-paysages-5"><img className="favoriteHeart" /></label>
                        <img className="chooseCameraImage" src={noImageFound} /><div>Caméra5</div>
                    </li>
                </ul>
                <a href="https://google.fr" className="textePetit" style={{float: "right"}}>voir plus</a>
            </div>

		</div>
	);
};

export default ChooseCamera;