import React from "react";
import { useNavigate } from "react-router-dom";
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

function AddCamera()
{
    const navigate = new useNavigate() 
	return (
		<div id="body">
            <table>
                <tr>
                    <td>Wive!</td>
                    <td><img src={wiveCenterWhiteMode} /></td>
                </tr>
            </table>

            <div>Ajouter une caméra</div>
            <div>Veuillez renseigner les informations suivantes afin de pouvoir soumettre votre caméra à Mive</div>
            <br/>

            <div class="textField"><input type="text" placeholder="Nom de votre caméra" /></div>
            <div class="textField"><input type="text" placeholder="Adresse IP" /></div>

            <div><input type="checkbox" /><span>J’accepte les cgu</span></div>
            <div><input type="checkbox" /><span>J’accepte que la proposition soit refusée en cas de non respect de nos conditions</span></div>

            <button>Valider</button>

            <div class="footer">
				<button class="footerButton" onClick={()=>{navigate('/Place')}} ><img src={homeWhiteMode}/></button>
				<button class="footerButton" onClick={()=>{navigate('/AddCamera')}} ><img src={plusWhiteModeChecked}/></button>
				<button class="footerButton" onClick={()=>{navigate('/')}} ><img src={wiveWhiteMode}/></button>
				<button class="footerButton" onClick={()=>{navigate('/')}} ><img src={heartWhiteMode}/></button>
			</div>
		</div>
	);
};

export default AddCamera;