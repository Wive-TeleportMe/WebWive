import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Home.css";

function Home()
{
    const navigate = new useNavigate() 
	return (
		<div id="body">

			<table class="menuNavigate">
				<tr>
					<td><button onClick={()=>{navigate('/Place')}}>Place</button></td>
					<td><button onClick={()=>{navigate('/Login')}}>Login</button></td>
					<td><button onClick={()=>{navigate('/Signin')}}>Signin</button></td>
				</tr>
			</table>

		</div>
	);
};

export default Home;