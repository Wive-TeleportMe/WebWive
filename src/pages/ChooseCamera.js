import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/global.css";
import "../css/ChooseCamera.css";

// IMPORT DES IMAGES :
import centreCommercial from "../assets/defaultImages/Centre commercial.jpg";
import kilimandjaro from "../assets/defaultImages/Kilimandjaro.jpg";
import montBlanc from "../assets/defaultImages/Mont Blanc.jpg";
import parc from "../assets/defaultImages/Parc.jpg";
import plage from "../assets/defaultImages/Plage.jpg";
import salleDeSport from "../assets/defaultImages/Salle de sport.jpg";

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
                        <input type="checkbox" className="favoriteCheckbox" id="CB-alentours-1"/><label for="CB-alentours-1"><img className="favoriteHeart"/></label>
                        <img className="chooseImage" src={salleDeSport} /><div>Salle de sport</div>
                    </li>
                    <li>
                        <input type="checkbox" className="favoriteCheckbox" id="CB-alentours-2"/><label for="CB-alentours-2"><img className="favoriteHeart" /></label>
                        <img className="chooseImage" src={parc} /><div>Parc</div></li>
                    <li>
                        <input type="checkbox" className="favoriteCheckbox" id="CB-alentours-3"/><label for="CB-alentours-3"><img className="favoriteHeart" /></label>
                        <img className="chooseImage" src={centreCommercial} /><div>Centre commercial</div>
                    </li>
                </ul>
                <a href="https://google.fr" className="textePetit" style={{float: "right"}}>voir plus</a>
                <br/><br/><br/>

                <div className="titreMoyen">Découvrez les plus beaux paysages</div>
                <ul className="carousel">
                    <li>
                        <input type="checkbox" className="favoriteCheckbox" id="CB-paysages-1"/><label for="CB-paysages-1"><img className="favoriteHeart" /></label>
                        <img className="chooseImage" src={kilimandjaro} /><div>Kilimandjaro</div>
                    </li>
                    <li><input type="checkbox" className="favoriteCheckbox" id="CB-paysages-2"/><label for="CB-paysages-2"><img className="favoriteHeart" /></label>
                        <img className="chooseImage" src={montBlanc} /><div>Mont blanc</div>
                    </li>
                    <li><input type="checkbox" className="favoriteCheckbox" id="CB-paysages-3"/><label for="CB-paysages-3"><img className="favoriteHeart" /></label>
                        <img className="chooseImage" src={plage} /><div>Plage</div>
                    </li>
                </ul>
                <a href="https://google.fr" className="textePetit" style={{float: "right"}}>voir plus</a>
            </div>

		</div>
	);
};

export default ChooseCamera;