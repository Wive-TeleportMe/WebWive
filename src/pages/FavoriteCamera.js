import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/global.css";
import "../css/FavoriteCamera.css"


// IMPORT DES IMAGES :
import centreCommercial from "../assets/defaultImages/Centre commercial.jpg";
import kilimandjaro from "../assets/defaultImages/Kilimandjaro.jpg";
import montBlanc from "../assets/defaultImages/Mont Blanc.jpg";
import parc from "../assets/defaultImages/Parc.jpg";
import plage from "../assets/defaultImages/Plage.jpg";
import salleDeSport from "../assets/defaultImages/Salle de sport.jpg";
import noImageFound from "../assets/noImageFound.png";

function FavoriteCamera()
{
    const navigate = new useNavigate() 
   
	return (
		<div id="body">
            <div className="iconContainerSpace"></div>
            
            <div className="menuBody">
                <div className="titreMoyen">Caméras favorites</div>
                <table className="favoriteCameraTable">
                    <tr>
                        <td>
                            <input type="checkbox" className="favoriteCheckbox" id="CB-favorite-1" defaultChecked /><label htmlFor="CB-favorite-1"><img className="favoriteHeart" /></label>
                            <img className="favoriteCameraImage" src={salleDeSport} /><div>Salle de sport</div>
                        </td>
                        <td>
                            <input type="checkbox" className="favoriteCheckbox" id="CB-favorite-2" defaultChecked /><label htmlFor="CB-favorite-2"><img className="favoriteHeart" /></label>
                            <img className="favoriteCameraImage" src={parc} /><div>Parc</div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" className="favoriteCheckbox" id="CB-favorite-3" defaultChecked /><label htmlFor="CB-favorite-3"><img className="favoriteHeart" /></label>
                            <img className="favoriteCameraImage" src={centreCommercial} /><div>Centre commercial</div>
                        </td>
                        <td>
                            <input type="checkbox" className="favoriteCheckbox" id="CB-favorite-4" defaultChecked /><label htmlFor="CB-favorite-4"><img className="favoriteHeart" /></label>
                            <img className="favoriteCameraImage" src={kilimandjaro} /><div>Kilimandjaro</div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" className="favoriteCheckbox" id="CB-favorite-5" defaultChecked /><label htmlFor="CB-favorite-5"><img className="favoriteHeart" /></label>
                            <img className="favoriteCameraImage" src={montBlanc} /><div>Mont Blanc</div>
                        </td>
                        <td>
                            <input type="checkbox" className="favoriteCheckbox" id="CB-favorite-6" defaultChecked /><label htmlFor="CB-favorite-6"><img className="favoriteHeart" /></label>
                            <img className="favoriteCameraImage" src={plage} /><div>Plage</div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" className="favoriteCheckbox" id="CB-favorite-7" defaultChecked /><label htmlFor="CB-favorite-7"><img className="favoriteHeart" /></label>
                            <img className="favoriteCameraImage" src={noImageFound} /><div>Caméra7</div>
                        </td>
                        <td>
                            <input type="checkbox" className="favoriteCheckbox" id="CB-favorite-8" defaultChecked /><label htmlFor="CB-favorite-8"><img className="favoriteHeart" /></label>
                            <img className="favoriteCameraImage" src={noImageFound} /><div>Caméra8</div>
                        </td>
                    </tr>
                </table>
            </div>
		</div>
	);
};

// function changeCheckbox(checkboxId){
//     let element = document.getElementById(checkboxId)
//     if (element.checked == true) {
//         element.checked = "false"
//         console.log("false")
//     }
//     else{
//         element.checked = "true"
//         console.log("true")

//     }
// }

export default FavoriteCamera;