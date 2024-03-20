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

function FavoriteCamera()
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

            <div>Caméras favorites</div>
            <table>
                <tr>
                    <td><img src={wiveCenterWhiteMode} /><div>Salle de sport</div></td>
                    <td><img src={wiveCenterWhiteMode} /><div>Parc</div></td>
                    <td><img src={wiveCenterWhiteMode} /><div>Centre commercial</div></td>
                </tr>
            </table>
            <br/>

            <div class="footer">
				<button class="footerButton" onClick={()=>{navigate('/Place')}} ><img src={homeWhiteMode}/></button>
				<button class="footerButton" onClick={()=>{navigate('/AddCamera')}} ><img src={plusWhiteMode}/></button>
				<button class="footerButton" onClick={()=>{navigate('/ChooseCamera')}} ><img src={wiveWhiteMode}/></button>
				<button class="footerButton" onClick={()=>{navigate('/FavoriteCamera')}} ><img src={heartWhiteModeChecked}/></button>
			</div>
		</div>
	);
};

export default FavoriteCamera;