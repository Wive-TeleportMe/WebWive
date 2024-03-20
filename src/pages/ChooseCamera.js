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

function ChooseCamera()
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

            <div>Découvrez vos alentours</div>
            <table>
                <tr>
                    <td><img src={wiveCenterWhiteMode} /><div>Salle de sport</div></td>
                    <td><img src={wiveCenterWhiteMode} /><div>Parc</div></td>
                    <td><img src={wiveCenterWhiteMode} /><div>Centre commercial</div></td>
                </tr>
            </table>
            <br/>

            <div>Découvrez les plus beaux paysages</div>
            <table>
                <tr>
                    <td><img src={wiveCenterWhiteMode} /><div>Kilimandjaro</div></td>
                    <td><img src={wiveCenterWhiteMode} /><div>Mont blanc</div></td>
                    <td><img src={wiveCenterWhiteMode} /><div>Plage</div></td>
                </tr>
            </table>

            <div class="footer">
				<button class="footerButton" onClick={()=>{navigate('/Place')}} ><img src={homeWhiteMode}/></button>
				<button class="footerButton" onClick={()=>{navigate('/AddCamera')}} ><img src={plusWhiteMode}/></button>
				<button class="footerButton" onClick={()=>{navigate('/ChooseCamera')}} ><img src={wiveWhiteMode}/><img src={wiveCenterWhiteMode}/></button>
				<button class="footerButton" onClick={()=>{navigate('/FavoriteCamera')}} ><img src={heartWhiteMode}/></button>
			</div>
		</div>
	);
};

export default ChooseCamera;