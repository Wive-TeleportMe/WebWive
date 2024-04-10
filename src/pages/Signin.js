import React from "react";
// import "../css/Signin.css";


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

	async function handleSubmit(){ // TEST, A ENLEVER

		document.getElementById("div1").innerHTML = 'HEY'
		document.getElementById("div2").innerHTML = 'HEY'
		document.getElementById("div3").innerHTML = 'HEY'		
		
	}

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

	return (
		<div id="body">

			<form class="form" action="#" onSubmit={handleSubmit}>

				<h1 class="titreConnexion">Inscription</h1>

				<label id="AAA" for="local_user" class="textfieldLabel">Identifiant :</label>
				{/* <input type="text" class="textfield" placeholder="Jean.Dupont" onChange={e => setUserName(e.target.value)} required/> */}
				<input type="text" class="textfield" placeholder="Jean.Dupont" required/>
				<br/>

				<label class="local_password">Mot de passe :</label>
				{/* <input type="text" class="textfield" placeholder="*********" onChange={e => setPassword(e.target.value)} required/> */}
				<input type="text" class="textfield" placeholder="*********" required/>
				<br/>

				<input type="submit" value="S'inscrire" />
			</form>

			{/* A EFFACER */}
			<div id="div1"></div>
			<div id="div2"></div>
			<div id="div3"></div>
			{/* A EFFACER */}
		</div>
	);
};

export default Signin;