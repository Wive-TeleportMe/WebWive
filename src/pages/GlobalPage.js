import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "../css/GlobalPage.css";

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

    const [searchParams] = useSearchParams()
    let paramPage = searchParams.get("page")
    if (paramPage == null ) {
        paramPage = ''
    }

    let urlOrigin = window.location.origin


    const navigate = new useNavigate() 
	return (
		<div id="body">

            <iframe id='iframeShownPage' src={urlOrigin + '/' + paramPage} frameBorder="0">

            </iframe>

            <div class="footer">
				<button class="footerButton" onClick={()=>{navigate('/globalPage?page=Place')}} ><img src={paramPage=='Place' ? homeWhiteModeChecked : homeWhiteMode}/></button>
				<button class="footerButton" onClick={()=>{navigate('/globalPage?page=AddCamera')}} ><img src={paramPage=='AddCamera' ? plusWhiteModeChecked : plusWhiteMode}/></button>
				<button class="footerButton" onClick={()=>{navigate('/globalPage?page=ChooseCamera')}} ><img src={paramPage=='ChooseCamera' ? wiveWhiteMode + wiveCenterWhiteMode : wiveWhiteMode}/></button>
				<button class="footerButton" onClick={()=>{navigate('/globalPage?page=FavoriteCamera')}} ><img src={paramPage=='FavoriteCamera' ? heartWhiteModeChecked : heartWhiteMode}/></button>
			</div>
		</div>
	);
};

export default AddCamera;