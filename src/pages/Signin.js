import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/global.css";
// import "../css/Signin.css"

// IMPORT DES IMAGES :
import wiveLogoTitre from "../assets/whiteMode/wiveLogoTitre.svg";

// async function loginUser(credentials) {
// 	return fetch('https://www.mecallapi.com/api/login', {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json'
// 		},
// 		body: JSON.stringify(credentials)
// 	})
// 	.then(data => data.json())
// }


function Signin()
{
	// const classes = useStyles();
	// const [username, setUserName] = useState();
	// const [password, setPassword] = useState();

	// async function handleSubmit(){ // TEST, A ENLEVER

	// 	document.getElementById("div1").innerHTML = 'HEY'
	// 	document.getElementById("div2").innerHTML = 'HEY'
	// 	document.getElementById("div3").innerHTML = 'HEY'		
		
	// }

	// const handleSubmit = async e => {
	// 	e.preventDefault();
	// 	const response = await loginUser({
	// 		username,
	// 		password
	// 	});
	// 	if ('accessToken' in response) {
	// 		swal("Success", response.message, "success", {
	// 			buttons: false,
	// 			timer: 2000,
	// 		})
	// 		.then((value) => {
	// 			localStorage.setItem('accessToken', response['accessToken']);
	// 			localStorage.setItem('user', JSON.stringify(response['user']));
	// 			window.location.href = "/profile";
	// 		});
	// 	} else {
	// 		swal("Failed", response.message, "error");
	// 	}
	// }

	const navigate = new useNavigate()

	return (

		<div id="body">
			<div className="iconContainer">
				<img src={wiveLogoTitre} /> 
			</div>
			<div className="iconContainerSpace"></div>

			<h2 className="menuTitre">Inscription</h2>
			<div className="menuBody">
				<select className="selectField textField" required >
					<option value={""} disabled selected hidden>M / Mme</option>
					<option value={"M"}>M</option>
					<option value={"Mme"}>Mme</option>
				</select>

				<input className="textField" type="text" placeholder="Email"/>
				<input className="textField" type="password" placeholder="Mot de passe" />
				<input className="textField" type="password" placeholder="Confirmation de mot de passe"/>
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
						<td onClick={()=>document.getElementById("CB-refus").click()} style={{cursor: "pointer"}}><span>J’accepte que la proposition soit refusée en cas de non respect de nos conditions</span></td>
					</tr>
				</table>
				<br/><br/><br/>

				<div className="textButton"><button onClick={()=>navigate('/globalPage?page=Place')}>Créer un compte</button></div>
			</div>
		</div>
	
		// <div id="body">

		// 	<form className="form" action="#" onSubmit={handleSubmit}>

		// 		<h1 className="titreConnexion">Inscription</h1>

		// 		<label id="AAA" for="local_user" className="textfieldLabel">Identifiant :</label>
		// 		{/* <input type="text" className="textfield" placeholder="Jean.Dupont" onChange={e => setUserName(e.target.value)} required/> */}
		// 		<input type="text" className="textfield" placeholder="Jean.Dupont" required/>
		// 		<br/>

		// 		<label className="local_password">Mot de passe :</label>
		// 		{/* <input type="text" className="textfield" placeholder="*********" onChange={e => setPassword(e.target.value)} required/> */}
		// 		<input type="text" className="textfield" placeholder="*********" required/>
		// 		<br/>

		// 		<input type="submit" value="S'inscrire" />
		// 	</form>

		// 	{/* A EFFACER */}
		// 	<div id="div1"></div>
		// 	<div id="div2"></div>
		// 	<div id="div3"></div>
		// 	{/* A EFFACER */}
		// </div>
	);
};

export default Signin;