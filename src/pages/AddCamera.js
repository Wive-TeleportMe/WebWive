import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/global.css";
import GlobalPage from "./GlobalPage";


function AddCamera()
{
    const navigate = new useNavigate() 
	return (
		<div id="body">
            <div className="iconContainerSpace"></div>

            {/* 1ere partie : AJOUTER UNE CAMERA */}
            <div id="part1">
                <h2 className="menuTitre">Ajouter une caméra</h2>
                <div className="menuBody">
                    <p>Veuillez renseigner les informations suivantes afin de pouvoir soumettre votre caméra à Wive</p>

                    {/* <div className="textField"><input type="text" /><span>Nom de votre caméra</span></div> */}
                    {/* <div className="textField"><input type="text" /><span>Adresse IP</span></div> */}
                    <input className="textField" type="text" placeholder="Nom de votre caméra" />
                    <input className="textField" type="text" placeholder="Adresse IP"/>
                    <a href="https://google.fr" className="smallText" style={{float: "right"}}>Comment trouver l'addresse IP ?</a>
                    <br/><br/>

                    <table>
                        <tr>
                            <td><input type="checkbox" id="CB-cgu"/></td>
                            <td onClick={()=>document.getElementById("CB-cgu").click()} style={{cursor: "pointer"}}>
                                <span>J’accepte les cgu</span>
                            </td>
                        </tr>
                    </table><br/>
                    <table>
                        <tr>
                            <td><input type="checkbox" id="CB-refus"/></td>
                            <td onClick={()=>document.getElementById("CB-refus").click()} style={{cursor: "pointer"}}>
                                <span>J’accepte que la proposition soit refusée en cas de non respect de nos conditions</span>
                            </td>
                        </tr>
                    </table><br/>

                    <div className="textButton" style={{bottom: "14vh"}}><button onClick={()=>addCameraButton()}>Valider</button></div>
                </div>
            </div>


            {/* 2eme partie : MERCI POUR VOTRE PROPOSITION ! */}
            <div id="part2" style={{display: "none"}}>
                <h2 className="menuTitre">Merci pour votre proposition !</h2>
                <br/><br/>
                <div className="menuBody">
                    <p>Votre dossier a bien été envoyé, nous examinons votre proposition.</p>
                    <p>Nous vous préviendrons par mail de l’état de votre demande</p>

                                                                                            {/* Redirection vers Place. Probablement mal fait, à changer un autre fois */}
                    <div className="textButton" style={{bottom: "14vh"}}><button onClick={()=>window.location.href = window.location.href.replace("AddCamera", "Place")}>Revenir à l'accueil</button></div>
                </div>
            </div>

		</div>
	);
};

function addCameraButton(){

    //////
    // BIDULES POUR AJOUTER UN CAMERA
    //////

    // Affiche la 2eme partie
    let elementPart1 = document.getElementById("part1")
    let elementPart2 = document.getElementById("part2")
    elementPart1.style.display = "none"
    elementPart2.style.display = "block"
}

export default AddCamera;