import React from "react";
import { useNavigate } from "react-router-dom";
// import "../css/global.css";

// IMPORT DES IMAGES :
import paramWhiteMode from "../assets/whiteMode/paramWhiteMode.svg";

function AddCamera()
{
    const navigate = new useNavigate() 
	return (
		<div id="body">
            <table>
                <tr>
                    <td>Wive!</td>
                    <td><img src={paramWhiteMode} /></td>
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

		</div>
	);
};

export default AddCamera;