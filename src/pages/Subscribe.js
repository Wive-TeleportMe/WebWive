import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/global.css";


function Subscribe()
{
    const navigate = new useNavigate() 
	return (
		<div id="body">
            {/* 1ere partie : GROS TEXTE, "Abonne toi !" */}
            <div id="part1">
                <div className="bigText screenCenteredText">
                    <div style={{color: "#BA30F7"}}>Abonne toi</div>
                    <div>pour</div>
                    <div>ajouter une</div>
                    <div>caméra</div>                
                </div>
                <div className="textButton" style={{bottom: "20vh"}}><button onClick={()=>ouvrePart2()}>S'abonner</button></div>
            </div>


            {/* 2eme partie : ENTRER CARTE POUR S'ABONNER */}
            <div id="part2" style={{display: "none"}}>
                <div className="iconContainerSpace"></div>
                <div className="menuBody">
                    <input className="textField" type="text" placeholder="Nom sur la carte" />
                    <input className="textField" type="text" placeholder="Numéro de carte"/>
                    <table style={{width: "100%"}} cellPadding={0} cellSpacing={0}><tr>
                        <td style={{width: "45%"}}><input className="textField" type="text" placeholder="Expiration"/></td>
                        <td style={{width: "5%"}}></td>
                        <td style={{width: "45%"}}><input className="textField" type="text" placeholder="Cryptogramme"/></td>
                    </tr></table>
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

                    <div className="textButton" style={{bottom: "20vh"}}><button onClick={()=>toSubscribe()}>S'abonner</button></div>
                </div>
            </div>


            {/* 3eme partie : MERCI ! */}
            <div id="part3" style={{display: "none"}}>                      
                                                            {/* onClick={()=>{navigate('/AddCamera')}} */}
                <div className="bigText screenCenteredText" onClick={()=>{navigate('/AddCamera')}}>
                    <div>Merci !</div>
                </div>                    
            </div>

		</div>
	);
};

function ouvrePart2(){
    // Affiche la 2eme partie
    let elementPart1 = document.getElementById("part1")
    let elementPart2 = document.getElementById("part2")
    elementPart1.style.display = "none"
    elementPart2.style.display = "block"
}
function toSubscribe(){

    //////
    // BIDULES POUR S'ABONNER
    //////

    // Affiche la 3eme partie
    let elementPart2 = document.getElementById("part2")
    let elementPart3 = document.getElementById("part3")
    elementPart2.style.display = "none"
    elementPart3.style.display = "block"
}

export default Subscribe;