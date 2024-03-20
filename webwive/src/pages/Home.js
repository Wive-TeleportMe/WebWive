import React from "react";
import useNavigate from 'react-router-dom';
import "../css/Home.css";

function navigateTo(path){
	useNavigate(path)
}

function Home()
{
	return (
		<div id="body">

			<table class="menuNavigate">
				<tr>
					<td onClick={navigateTo('/Place')}>Place</td>
					<td onClick={navigateTo('/Login')}>Login</td>
					<td onClick={navigateTo('/Signin')}>Signin</td>
				</tr>
			</table>

		</div>
	);
};

export default Home;