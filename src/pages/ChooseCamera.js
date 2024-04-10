import React from "react";
import { useNavigate } from "react-router-dom";
// import "../css/global.css";

// IMPORT DES IMAGES :
import wiveCenterWhiteMode from "../assets/whiteMode/wiveCenterWhiteMode.svg";
import paramWhiteMode from "../assets/whiteMode/paramWhiteMode.svg";

function ChooseCamera()
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

		</div>
	);
};

export default ChooseCamera;